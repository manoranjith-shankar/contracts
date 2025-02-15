import {
  LogicContractSet as LogicContractSetEvent,
  TokenUpgraded as TokenUpgradedEvent,
  DefaultTransferManagerUpdated as DefaultTransferManagerUpdatedEvent,
  DefaultDataStoreUpdated as DefaultDataStoreUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  LogicContractSet1 as LogicContractSet1Event,
} from "../generated/STFactory/STFactory"
import {
  LogicContractSet,
  TokenUpgraded,
  DefaultTransferManagerUpdated,
  DefaultDataStoreUpdated,
  OwnershipTransferred,
  LogicContractSet1,
} from "../generated/schema1"

export function handleLogicContractSet(event: LogicContractSetEvent): void {
  let entity = new LogicContractSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._version = event.params._version
  entity._upgrade = event.params._upgrade
  entity._logicContract = event.params._logicContract
  entity._initializationData = event.params._initializationData
  entity._upgradeData = event.params._upgradeData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenUpgraded(event: TokenUpgradedEvent): void {
  let entity = new TokenUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._securityToken = event.params._securityToken
  entity._version = event.params._version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultTransferManagerUpdated(
  event: DefaultTransferManagerUpdatedEvent,
): void {
  let entity = new DefaultTransferManagerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._oldTransferManagerFactory = event.params._oldTransferManagerFactory
  entity._newTransferManagerFactory = event.params._newTransferManagerFactory

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultDataStoreUpdated(
  event: DefaultDataStoreUpdatedEvent,
): void {
  let entity = new DefaultDataStoreUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._oldDataStoreFactory = event.params._oldDataStoreFactory
  entity._newDataStoreFactory = event.params._newDataStoreFactory

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLogicContractSet1(event: LogicContractSet1Event): void {
  let entity = new LogicContractSet1(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._version = event.params._version
  entity._logicContract = event.params._logicContract
  entity._upgradeData = event.params._upgradeData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
