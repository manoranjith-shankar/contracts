import {
  LogicContractSet as LogicContractSetEvent,
  ModuleUpgraded as ModuleUpgradedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ChangeSetupCost as ChangeSetupCostEvent,
  ChangeCostType as ChangeCostTypeEvent,
  GenerateModuleFromFactory as GenerateModuleFromFactoryEvent,
  ChangeSTVersionBound as ChangeSTVersionBoundEvent
} from "../generated/ERC20DividendCheckpointFactory/ERC20DividendCheckpointFactory"
import {
  LogicContractSet,
  ModuleUpgraded,
  OwnershipTransferred,
  ChangeSetupCost,
  ChangeCostType,
  GenerateModuleFromFactory,
  ChangeSTVersionBound
} from "../generated/schema"

export function handleLogicContractSet(event: LogicContractSetEvent): void {
  let entity = new LogicContractSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._version = event.params._version
  entity._upgrade = event.params._upgrade
  entity._logicContract = event.params._logicContract
  entity._upgradeData = event.params._upgradeData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleUpgraded(event: ModuleUpgradedEvent): void {
  let entity = new ModuleUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._module = event.params._module
  entity._securityToken = event.params._securityToken
  entity._version = event.params._version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeSetupCost(event: ChangeSetupCostEvent): void {
  let entity = new ChangeSetupCost(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldSetupCost = event.params._oldSetupCost
  entity._newSetupCost = event.params._newSetupCost

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeCostType(event: ChangeCostTypeEvent): void {
  let entity = new ChangeCostType(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._isOldCostInPoly = event.params._isOldCostInPoly
  entity._isNewCostInPoly = event.params._isNewCostInPoly

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGenerateModuleFromFactory(
  event: GenerateModuleFromFactoryEvent
): void {
  let entity = new GenerateModuleFromFactory(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._module = event.params._module
  entity._moduleName = event.params._moduleName
  entity._moduleFactory = event.params._moduleFactory
  entity._creator = event.params._creator
  entity._setupCost = event.params._setupCost
  entity._setupCostInPoly = event.params._setupCostInPoly

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangeSTVersionBound(
  event: ChangeSTVersionBoundEvent
): void {
  let entity = new ChangeSTVersionBound(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._boundType = event.params._boundType
  entity._major = event.params._major
  entity._minor = event.params._minor
  entity._patch = event.params._patch

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
