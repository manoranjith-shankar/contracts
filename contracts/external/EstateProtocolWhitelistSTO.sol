pragma solidity 0.5.8;

import "./IEstateProtocolWhitelistSTO.sol";

contract EstateProtocolWhitelistSTO is IEstateProtocolWhitelistSTO {
  address public admin;

  uint64 public constant MAX_LOCK_PERIOD = 365 days;

  mapping(address => InvestorKYCData) internal _investorKYCData;
  mapping(address => uint64) public tokenLockStartTime;
  mapping(address => bool) internal _existingInvestors;

  mapping(address => bool) public isAdmin;
  mapping(address => bool) public isOperator;


  constructor() public {
    admin = msg.sender;
    isAdmin[msg.sender] = true;
  }

  modifier onlyAdmin() {
    require(isAdmin[msg.sender], "Not an admin");
    _;
  }

  modifier onlyOperator() {
    require(isOperator[msg.sender], "Not a operator");
    _;
  }

  /**
    * @notice Add or remove KYC info of an investor.
    * @param _investor is the address to whitelist
    * @param _expiryTime is the moment till investors KYC will be validated. After that investor need to do re-KYC
    * @param _isAccredited True is the investor is accreditated
    */
  function modifyKYCData(address _investor, uint64 _expiryTime, bool _isAccredited) external onlyOperator {
    bool isAlreadyExistingInvestor = _existingInvestors[_investor];

    if (!isAlreadyExistingInvestor) {
      _existingInvestors[_investor] = true;
    }

    _investorKYCData[_investor] = InvestorKYCData({
      expiryTime: _expiryTime,
      isAccredited: _isAccredited
    });

    emit InvestorKYCDataUpdate({
      investor: _investor,
      expiryTime: _expiryTime,
      isAccredited: _isAccredited
    });
  }

  /**
    * @notice Get investor in the existingInvestors `investor`.
    */
  function isExistingInvestor(address investor) external view returns (bool) {
    return _existingInvestors[investor];
  }

  /**
    * @notice Get investor in the whitelist `investor`.
    */
  function getInvestorKYCData(address investor, address token) external view returns (
    uint64 canSendAfter,
    uint64 canReceiveAfter,
    uint64 expiryTime,
    uint8 added
  ) {
    uint64 pastBlockTimestamp = uint64(block.timestamp - 1);

    InvestorKYCData memory investorKYCData =  _investorKYCData[investor];

    uint64 unlockTime = pastBlockTimestamp;

    if (investorKYCData.isAccredited) {
      unlockTime = tokenLockStartTime[token] + MAX_LOCK_PERIOD;
    }
    return (unlockTime, pastBlockTimestamp, investorKYCData.expiryTime, uint8(1));
  }

  function AddTokenLockStartTime(address token, uint64 startTime) external onlyAdmin {
    tokenLockStartTime[token] = startTime;

    emit TokenLockStartTimeAdded({
      token: token, 
      startTime: startTime
    });
  }


  function grantAdminRole(address account) external onlyAdmin {
    require(!isAdmin[account], "Account is already an admin");
    isAdmin[account] = true;
    emit AdminRoleGranted(account);
  }

  function revokeAdminRole(address account) external onlyAdmin {
    require(isAdmin[account], "Account is not an admin");
    isAdmin[account] = false;
    emit AdminRoleRevoked(account);
  }

  function grantOperatorRole(address account) external onlyAdmin {
    require(!isOperator[account], "Account is already a operator");
    isOperator[account] = true;
    emit OperatorRoleGranted(account);
  }

  function revokeOperatorRole(address account) external onlyAdmin {
    require(isOperator[account], "Account is not a operator");
    isOperator[account] = false;
    emit OperatorRoleRevoked(account);
  }


}
