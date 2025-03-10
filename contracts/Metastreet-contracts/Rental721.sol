// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Rental721
 * @dev ERC721 contract for representing locked token ownership
 */
contract Rental721 is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    string public baseTokenURI;

    constructor() ERC721("Estate Protocol Rental", "EPR") Ownable(msg.sender) {}

    /**
     * @dev Mints a new token to the specified address
     * @param to The recipient address
     * @param metadata The token metadata
     * @return The newly minted token ID
     */
    function mint(address to, string memory metadata) external onlyOwner returns (uint256) {
        _tokenIdCounter++;
        uint256 tokenId = _tokenIdCounter;

        _mint(to, tokenId);
        _setTokenURI(tokenId, metadata);

        return tokenId;
    }

    /**
     * @dev Burns a token owned by the specified address
     * @param owner The address of the token owner
     */
    function burn(address owner) external onlyOwner {
        uint256 tokenId = tokenOfOwnerByIndex(owner, 0); // Assumes the owner has only one token
        _burn(tokenId);
    }

    /**
     * @dev Returns the token ID of the first token owned by `owner`
     * @param owner The address to query
     * @return The token ID
     */
    function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256) {
        require(index == 0, "Rental721: owner can have only one token");
        uint256 tokenId = uint256(uint160(owner)); // Simple mapping for demonstration

        // Check if the token exists by calling ownerOf
        try this.ownerOf(tokenId) {
            return tokenId;
        } catch {
            revert("Rental721: token does not exist");
        }
    }
}