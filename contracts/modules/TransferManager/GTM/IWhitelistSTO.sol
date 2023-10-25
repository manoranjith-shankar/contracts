pragma solidity 0.5.8;

/**
 * @title Investor whitelist interface
 */
interface IWhitelistSTO {
  function setWhitelist(address[] calldata _investors, bool[] calldata _values) external;
  function getWhitelist(address investor) external view returns (bool);
  
  event WhitelistUpdate(address[] investors, bool[] values);

}