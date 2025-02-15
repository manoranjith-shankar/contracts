import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  LogicContractSet,
  TokenUpgraded,
  DefaultTransferManagerUpdated,
  DefaultDataStoreUpdated,
  OwnershipTransferred,
  LogicContractSet1
} from "../generated/STFactory/STFactory"

export function createLogicContractSetEvent(
  _version: string,
  _upgrade: BigInt,
  _logicContract: Address,
  _initializationData: Bytes,
  _upgradeData: Bytes
): LogicContractSet {
  let logicContractSetEvent = changetype<LogicContractSet>(newMockEvent())

  logicContractSetEvent.parameters = new Array()

  logicContractSetEvent.parameters.push(
    new ethereum.EventParam("_version", ethereum.Value.fromString(_version))
  )
  logicContractSetEvent.parameters.push(
    new ethereum.EventParam(
      "_upgrade",
      ethereum.Value.fromUnsignedBigInt(_upgrade)
    )
  )
  logicContractSetEvent.parameters.push(
    new ethereum.EventParam(
      "_logicContract",
      ethereum.Value.fromAddress(_logicContract)
    )
  )
  logicContractSetEvent.parameters.push(
    new ethereum.EventParam(
      "_initializationData",
      ethereum.Value.fromBytes(_initializationData)
    )
  )
  logicContractSetEvent.parameters.push(
    new ethereum.EventParam(
      "_upgradeData",
      ethereum.Value.fromBytes(_upgradeData)
    )
  )

  return logicContractSetEvent
}

export function createTokenUpgradedEvent(
  _securityToken: Address,
  _version: BigInt
): TokenUpgraded {
  let tokenUpgradedEvent = changetype<TokenUpgraded>(newMockEvent())

  tokenUpgradedEvent.parameters = new Array()

  tokenUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_securityToken",
      ethereum.Value.fromAddress(_securityToken)
    )
  )
  tokenUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_version",
      ethereum.Value.fromUnsignedBigInt(_version)
    )
  )

  return tokenUpgradedEvent
}

export function createDefaultTransferManagerUpdatedEvent(
  _oldTransferManagerFactory: Address,
  _newTransferManagerFactory: Address
): DefaultTransferManagerUpdated {
  let defaultTransferManagerUpdatedEvent =
    changetype<DefaultTransferManagerUpdated>(newMockEvent())

  defaultTransferManagerUpdatedEvent.parameters = new Array()

  defaultTransferManagerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldTransferManagerFactory",
      ethereum.Value.fromAddress(_oldTransferManagerFactory)
    )
  )
  defaultTransferManagerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newTransferManagerFactory",
      ethereum.Value.fromAddress(_newTransferManagerFactory)
    )
  )

  return defaultTransferManagerUpdatedEvent
}

export function createDefaultDataStoreUpdatedEvent(
  _oldDataStoreFactory: Address,
  _newDataStoreFactory: Address
): DefaultDataStoreUpdated {
  let defaultDataStoreUpdatedEvent =
    changetype<DefaultDataStoreUpdated>(newMockEvent())

  defaultDataStoreUpdatedEvent.parameters = new Array()

  defaultDataStoreUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldDataStoreFactory",
      ethereum.Value.fromAddress(_oldDataStoreFactory)
    )
  )
  defaultDataStoreUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newDataStoreFactory",
      ethereum.Value.fromAddress(_newDataStoreFactory)
    )
  )

  return defaultDataStoreUpdatedEvent
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

export function createLogicContractSet1Event(
  _version: string,
  _logicContract: Address,
  _upgradeData: Bytes
): LogicContractSet1 {
  let logicContractSet1Event = changetype<LogicContractSet1>(newMockEvent())

  logicContractSet1Event.parameters = new Array()

  logicContractSet1Event.parameters.push(
    new ethereum.EventParam("_version", ethereum.Value.fromString(_version))
  )
  logicContractSet1Event.parameters.push(
    new ethereum.EventParam(
      "_logicContract",
      ethereum.Value.fromAddress(_logicContract)
    )
  )
  logicContractSet1Event.parameters.push(
    new ethereum.EventParam(
      "_upgradeData",
      ethereum.Value.fromBytes(_upgradeData)
    )
  )

  return logicContractSet1Event
}
