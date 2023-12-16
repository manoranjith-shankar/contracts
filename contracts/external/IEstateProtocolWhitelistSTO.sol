pragma solidity 0.5.8;

/**
 * @title Investor whitelist interface
 */
interface IEstateProtocolWhitelistSTO {
  
  struct InvestorKYCData {
    uint64 expiryTime;
    bool isAccredited;
  }

  function modifyKYCData(address _investor, uint64 _expiryTime, bool _isAccredited) external;
  function AddTokenLockStartTime(address token, uint64 startTime) external;
  function isExistingInvestor(address investor) external view returns (bool);
  function getInvestorKYCData(address investor, address token) external view returns (
    uint64 canSendAfter,
    uint64 canReceiveAfter,
    uint64 expiryTime,
    uint8 added
  );

  event InvestorKYCDataUpdate(
    address indexed investor,
    uint64 expiryTime,
    bool isAccredited
  );

  event TokenLockStartTimeAdded(address token, uint64 startTime);

  event AdminRoleGranted(address indexed account);
  event AdminRoleRevoked(address indexed account);
  event OperatorRoleGranted(address indexed account);
  event OperatorRoleRevoked(address indexed account);


}