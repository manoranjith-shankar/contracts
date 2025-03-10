// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title LQ1155
 * @dev ERC1155 contract for fungible locked tokens backed by ST-20
 */
contract LQ1155 is ERC1155, Ownable {
    constructor() ERC1155("") Ownable(msg.sender) {}

    /**
     * @dev Mints tokens to the specified address
     * @param to The recipient address
     * @param id The token ID
     * @param amount Amount to mint
     * @param data Additional data to pass to the receiver
     */
    function mint(address to, uint256 id, uint256 amount, bytes memory data) external onlyOwner {
        _mint(to, id, amount, data);
    }

    /**
     * @dev Burns tokens from the specified address
     * @param from The address to burn from
     * @param id The token ID
     * @param amount Amount to burn
     */
    function burn(address from, uint256 id, uint256 amount) external onlyOwner {
        _burn(from, id, amount);
    }
}