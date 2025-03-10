// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Rental721.sol";
import "./LQ1155.sol";

contract LockingFactoryImplementation is
    Initializable,
    UUPSUpgradeable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    // State variables
    IERC20 public stToken;
    Rental721 public rentalNFT;
    LQ1155 public Liquidity1155;

    mapping(address => bool) public hasMintedERC721;

    // Events
    event TokensLocked(address indexed user, uint256 amount);
    event TokensRedeemed(address indexed user, uint256 amount);

    // Custom errors
    error InvalidAmount();
    error InsufficientBalance();
    error TransferFailed();
    error InvalidTokenAddress();

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @dev Initializes the contract with required parameters
     * @param user The owner of this factory instance
     * @param stTokenAddress The ERC20 token this factory will accept
     */
    function initialize(address user, address stTokenAddress) external initializer {
        __ReentrancyGuard_init();
        __Ownable_init(user);
        __UUPSUpgradeable_init();

        if (stTokenAddress == address(0)) {
            revert InvalidTokenAddress();
        }
        stToken = IERC20(stTokenAddress);

        // Deploy the NFT contracts
        rentalNFT = new Rental721();
        Liquidity1155 = new LQ1155();
    }

    /**
     * @dev Locks tokens and mints corresponding ERC721 and ERC1155 token(s)
     * @param amount The amount of tokens to lock
     */
    function lockTokens(uint256 amount) external nonReentrant {
        if (amount == 0) {
            revert InvalidAmount();
        }

        // Transfer tokens from user to contract
        bool success = stToken.transferFrom(msg.sender, address(this), amount);
        if (!success) {
            revert TransferFailed();
        }

        // Mint ERC721 NFT with metadata (only once per user)
        if (!hasMintedERC721[msg.sender]) {
            try rentalNFT.mint(msg.sender, string(abi.encodePacked(address(stToken)))) {
                hasMintedERC721[msg.sender] = true;
            } catch {
                revert TransferFailed();
            }
        }

        // Mint ERC1155 Fungible Tokens
        try Liquidity1155.mint(msg.sender, uint256(uint160(address(stToken))), amount, "") {
            emit TokensLocked(msg.sender, amount);
        } catch {
            // If minting ERC1155 fails, revert the ERC721 minting and token transfer
            if (!hasMintedERC721[msg.sender]) {
                rentalNFT.burn(msg.sender);
                hasMintedERC721[msg.sender] = false;
            }
            revert TransferFailed();
        }
    }

    /**
     * @dev Redeems locked tokens by burning the corresponding ERC1155 tokens
     * @param amount The amount of tokens to redeem
     */
    function redeemEPTokens(uint256 amount) external nonReentrant {
        if (amount == 0) {
            revert InvalidAmount();
        }

        // Burn ERC1155 tokens first
        try Liquidity1155.burn(msg.sender, uint256(uint160(address(stToken))), amount) {
            // Transfer tokens to the user
            bool success = stToken.transfer(msg.sender, amount);
            if (!success) {
                revert TransferFailed();
            }

            emit TokensRedeemed(msg.sender, amount);
        } catch {
            revert TransferFailed();
        }
    }

    /**
     * @dev Returns the user ERC721 balance
     * @param _user The user address
     */
    function getERC721Balance(address _user) public view returns (uint256) {
        return rentalNFT.balanceOf(_user);
    }

    /**
     * @dev Returns the user ERC1155 tokens
     * @param _user The user address
     */
    function getERC1155Balance(address _user) public view returns (uint256) {
        return Liquidity1155.balanceOf(_user, uint256(uint160(address(stToken))));
    }

    /**
     * @dev Authorizes the upgrade to a new implementation
     * @param newImplementation The address of the new implementation
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}