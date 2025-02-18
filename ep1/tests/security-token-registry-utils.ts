import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Pause,
  Unpause,
  TickerRemoved,
  ChangeExpiryLimit,
  ChangeSecurityLaunchFee,
  ChangeTickerRegistrationFee,
  ChangeFeeCurrency,
  OwnershipTransferred,
  ChangeTickerOwnership,
  NewSecurityToken,
  NewSecurityToken1,
  RegisterTicker,
  RegisterTicker1,
  SecurityTokenRefreshed,
  ProtocolFactorySet,
  LatestVersionSet,
  ProtocolFactoryRemoved
} from "../generated/SecurityTokenRegistry/SecurityTokenRegistry"

export function createPauseEvent(account: Address): Pause {
  let pauseEvent = changetype<Pause>(newMockEvent())

  pauseEvent.parameters = new Array()

  pauseEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pauseEvent
}

export function createUnpauseEvent(account: Address): Unpause {
  let unpauseEvent = changetype<Unpause>(newMockEvent())

  unpauseEvent.parameters = new Array()

  unpauseEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpauseEvent
}

export function createTickerRemovedEvent(
  _ticker: string,
  _removedBy: Address
): TickerRemoved {
  let tickerRemovedEvent = changetype<TickerRemoved>(newMockEvent())

  tickerRemovedEvent.parameters = new Array()

  tickerRemovedEvent.parameters.push(
    new ethereum.EventParam("_ticker", ethereum.Value.fromString(_ticker))
  )
  tickerRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_removedBy",
      ethereum.Value.fromAddress(_removedBy)
    )
  )

  return tickerRemovedEvent
}

export function createChangeExpiryLimitEvent(
  _oldExpiry: BigInt,
  _newExpiry: BigInt
): ChangeExpiryLimit {
  let changeExpiryLimitEvent = changetype<ChangeExpiryLimit>(newMockEvent())

  changeExpiryLimitEvent.parameters = new Array()

  changeExpiryLimitEvent.parameters.push(
    new ethereum.EventParam(
      "_oldExpiry",
      ethereum.Value.fromUnsignedBigInt(_oldExpiry)
    )
  )
  changeExpiryLimitEvent.parameters.push(
    new ethereum.EventParam(
      "_newExpiry",
      ethereum.Value.fromUnsignedBigInt(_newExpiry)
    )
  )

  return changeExpiryLimitEvent
}

export function createChangeSecurityLaunchFeeEvent(
  _oldFee: BigInt,
  _newFee: BigInt
): ChangeSecurityLaunchFee {
  let changeSecurityLaunchFeeEvent =
    changetype<ChangeSecurityLaunchFee>(newMockEvent())

  changeSecurityLaunchFeeEvent.parameters = new Array()

  changeSecurityLaunchFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_oldFee",
      ethereum.Value.fromUnsignedBigInt(_oldFee)
    )
  )
  changeSecurityLaunchFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_newFee",
      ethereum.Value.fromUnsignedBigInt(_newFee)
    )
  )

  return changeSecurityLaunchFeeEvent
}

export function createChangeTickerRegistrationFeeEvent(
  _oldFee: BigInt,
  _newFee: BigInt
): ChangeTickerRegistrationFee {
  let changeTickerRegistrationFeeEvent =
    changetype<ChangeTickerRegistrationFee>(newMockEvent())

  changeTickerRegistrationFeeEvent.parameters = new Array()

  changeTickerRegistrationFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_oldFee",
      ethereum.Value.fromUnsignedBigInt(_oldFee)
    )
  )
  changeTickerRegistrationFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_newFee",
      ethereum.Value.fromUnsignedBigInt(_newFee)
    )
  )

  return changeTickerRegistrationFeeEvent
}

export function createChangeFeeCurrencyEvent(
  _isFeeInPoly: boolean
): ChangeFeeCurrency {
  let changeFeeCurrencyEvent = changetype<ChangeFeeCurrency>(newMockEvent())

  changeFeeCurrencyEvent.parameters = new Array()

  changeFeeCurrencyEvent.parameters.push(
    new ethereum.EventParam(
      "_isFeeInPoly",
      ethereum.Value.fromBoolean(_isFeeInPoly)
    )
  )

  return changeFeeCurrencyEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createChangeTickerOwnershipEvent(
  _ticker: string,
  _oldOwner: Address,
  _newOwner: Address
): ChangeTickerOwnership {
  let changeTickerOwnershipEvent =
    changetype<ChangeTickerOwnership>(newMockEvent())

  changeTickerOwnershipEvent.parameters = new Array()

  changeTickerOwnershipEvent.parameters.push(
    new ethereum.EventParam("_ticker", ethereum.Value.fromString(_ticker))
  )
  changeTickerOwnershipEvent.parameters.push(
    new ethereum.EventParam("_oldOwner", ethereum.Value.fromAddress(_oldOwner))
  )
  changeTickerOwnershipEvent.parameters.push(
    new ethereum.EventParam("_newOwner", ethereum.Value.fromAddress(_newOwner))
  )

  return changeTickerOwnershipEvent
}

export function createNewSecurityTokenEvent(
  _ticker: string,
  _name: string,
  _securityTokenAddress: Address,
  _owner: Address,
  _addedAt: BigInt,
  _registrant: Address,
  _fromAdmin: boolean,
  _usdFee: BigInt,
  _polyFee: BigInt,
  _protocolVersion: BigInt
): NewSecurityToken {
  let newSecurityTokenEvent = changetype<NewSecurityToken>(newMockEvent())

  newSecurityTokenEvent.parameters = new Array()

  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam("_ticker", ethereum.Value.fromString(_ticker))
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_securityTokenAddress",
      ethereum.Value.fromAddress(_securityTokenAddress)
    )
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_addedAt",
      ethereum.Value.fromUnsignedBigInt(_addedAt)
    )
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_registrant",
      ethereum.Value.fromAddress(_registrant)
    )
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_fromAdmin",
      ethereum.Value.fromBoolean(_fromAdmin)
    )
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_usdFee",
      ethereum.Value.fromUnsignedBigInt(_usdFee)
    )
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_polyFee",
      ethereum.Value.fromUnsignedBigInt(_polyFee)
    )
  )
  newSecurityTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_protocolVersion",
      ethereum.Value.fromUnsignedBigInt(_protocolVersion)
    )
  )

  return newSecurityTokenEvent
}

export function createNewSecurityToken1Event(
  _ticker: string,
  _name: string,
  _securityTokenAddress: Address,
  _owner: Address,
  _addedAt: BigInt,
  _registrant: Address,
  _fromAdmin: boolean,
  _registrationFee: BigInt
): NewSecurityToken1 {
  let newSecurityToken1Event = changetype<NewSecurityToken1>(newMockEvent())

  newSecurityToken1Event.parameters = new Array()

  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam("_ticker", ethereum.Value.fromString(_ticker))
  )
  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam(
      "_securityTokenAddress",
      ethereum.Value.fromAddress(_securityTokenAddress)
    )
  )
  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam(
      "_addedAt",
      ethereum.Value.fromUnsignedBigInt(_addedAt)
    )
  )
  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam(
      "_registrant",
      ethereum.Value.fromAddress(_registrant)
    )
  )
  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam(
      "_fromAdmin",
      ethereum.Value.fromBoolean(_fromAdmin)
    )
  )
  newSecurityToken1Event.parameters.push(
    new ethereum.EventParam(
      "_registrationFee",
      ethereum.Value.fromUnsignedBigInt(_registrationFee)
    )
  )

  return newSecurityToken1Event
}

export function createRegisterTickerEvent(
  _owner: Address,
  _ticker: string,
  _registrationDate: BigInt,
  _expiryDate: BigInt,
  _fromAdmin: boolean,
  _registrationFeePoly: BigInt,
  _registrationFeeUsd: BigInt
): RegisterTicker {
  let registerTickerEvent = changetype<RegisterTicker>(newMockEvent())

  registerTickerEvent.parameters = new Array()

  registerTickerEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  registerTickerEvent.parameters.push(
    new ethereum.EventParam("_ticker", ethereum.Value.fromString(_ticker))
  )
  registerTickerEvent.parameters.push(
    new ethereum.EventParam(
      "_registrationDate",
      ethereum.Value.fromUnsignedBigInt(_registrationDate)
    )
  )
  registerTickerEvent.parameters.push(
    new ethereum.EventParam(
      "_expiryDate",
      ethereum.Value.fromUnsignedBigInt(_expiryDate)
    )
  )
  registerTickerEvent.parameters.push(
    new ethereum.EventParam(
      "_fromAdmin",
      ethereum.Value.fromBoolean(_fromAdmin)
    )
  )
  registerTickerEvent.parameters.push(
    new ethereum.EventParam(
      "_registrationFeePoly",
      ethereum.Value.fromUnsignedBigInt(_registrationFeePoly)
    )
  )
  registerTickerEvent.parameters.push(
    new ethereum.EventParam(
      "_registrationFeeUsd",
      ethereum.Value.fromUnsignedBigInt(_registrationFeeUsd)
    )
  )

  return registerTickerEvent
}

export function createRegisterTicker1Event(
  _owner: Address,
  _ticker: string,
  _name: string,
  _registrationDate: BigInt,
  _expiryDate: BigInt,
  _fromAdmin: boolean,
  _registrationFee: BigInt
): RegisterTicker1 {
  let registerTicker1Event = changetype<RegisterTicker1>(newMockEvent())

  registerTicker1Event.parameters = new Array()

  registerTicker1Event.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  registerTicker1Event.parameters.push(
    new ethereum.EventParam("_ticker", ethereum.Value.fromString(_ticker))
  )
  registerTicker1Event.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  registerTicker1Event.parameters.push(
    new ethereum.EventParam(
      "_registrationDate",
      ethereum.Value.fromUnsignedBigInt(_registrationDate)
    )
  )
  registerTicker1Event.parameters.push(
    new ethereum.EventParam(
      "_expiryDate",
      ethereum.Value.fromUnsignedBigInt(_expiryDate)
    )
  )
  registerTicker1Event.parameters.push(
    new ethereum.EventParam(
      "_fromAdmin",
      ethereum.Value.fromBoolean(_fromAdmin)
    )
  )
  registerTicker1Event.parameters.push(
    new ethereum.EventParam(
      "_registrationFee",
      ethereum.Value.fromUnsignedBigInt(_registrationFee)
    )
  )

  return registerTicker1Event
}

export function createSecurityTokenRefreshedEvent(
  _ticker: string,
  _name: string,
  _securityTokenAddress: Address,
  _owner: Address,
  _addedAt: BigInt,
  _registrant: Address,
  _protocolVersion: BigInt
): SecurityTokenRefreshed {
  let securityTokenRefreshedEvent =
    changetype<SecurityTokenRefreshed>(newMockEvent())

  securityTokenRefreshedEvent.parameters = new Array()

  securityTokenRefreshedEvent.parameters.push(
    new ethereum.EventParam("_ticker", ethereum.Value.fromString(_ticker))
  )
  securityTokenRefreshedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  securityTokenRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "_securityTokenAddress",
      ethereum.Value.fromAddress(_securityTokenAddress)
    )
  )
  securityTokenRefreshedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  securityTokenRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "_addedAt",
      ethereum.Value.fromUnsignedBigInt(_addedAt)
    )
  )
  securityTokenRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "_registrant",
      ethereum.Value.fromAddress(_registrant)
    )
  )
  securityTokenRefreshedEvent.parameters.push(
    new ethereum.EventParam(
      "_protocolVersion",
      ethereum.Value.fromUnsignedBigInt(_protocolVersion)
    )
  )

  return securityTokenRefreshedEvent
}

export function createProtocolFactorySetEvent(
  _STFactory: Address,
  _major: i32,
  _minor: i32,
  _patch: i32
): ProtocolFactorySet {
  let protocolFactorySetEvent = changetype<ProtocolFactorySet>(newMockEvent())

  protocolFactorySetEvent.parameters = new Array()

  protocolFactorySetEvent.parameters.push(
    new ethereum.EventParam(
      "_STFactory",
      ethereum.Value.fromAddress(_STFactory)
    )
  )
  protocolFactorySetEvent.parameters.push(
    new ethereum.EventParam(
      "_major",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_major))
    )
  )
  protocolFactorySetEvent.parameters.push(
    new ethereum.EventParam(
      "_minor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_minor))
    )
  )
  protocolFactorySetEvent.parameters.push(
    new ethereum.EventParam(
      "_patch",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_patch))
    )
  )

  return protocolFactorySetEvent
}

export function createLatestVersionSetEvent(
  _major: i32,
  _minor: i32,
  _patch: i32
): LatestVersionSet {
  let latestVersionSetEvent = changetype<LatestVersionSet>(newMockEvent())

  latestVersionSetEvent.parameters = new Array()

  latestVersionSetEvent.parameters.push(
    new ethereum.EventParam(
      "_major",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_major))
    )
  )
  latestVersionSetEvent.parameters.push(
    new ethereum.EventParam(
      "_minor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_minor))
    )
  )
  latestVersionSetEvent.parameters.push(
    new ethereum.EventParam(
      "_patch",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_patch))
    )
  )

  return latestVersionSetEvent
}

export function createProtocolFactoryRemovedEvent(
  _STFactory: Address,
  _major: i32,
  _minor: i32,
  _patch: i32
): ProtocolFactoryRemoved {
  let protocolFactoryRemovedEvent =
    changetype<ProtocolFactoryRemoved>(newMockEvent())

  protocolFactoryRemovedEvent.parameters = new Array()

  protocolFactoryRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_STFactory",
      ethereum.Value.fromAddress(_STFactory)
    )
  )
  protocolFactoryRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_major",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_major))
    )
  )
  protocolFactoryRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_minor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_minor))
    )
  )
  protocolFactoryRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_patch",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_patch))
    )
  )

  return protocolFactoryRemovedEvent
}
