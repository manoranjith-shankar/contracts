import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  LogicContractSet,
  ModuleUpgraded,
  OwnershipTransferred,
  ChangeSetupCost,
  ChangeCostType,
  GenerateModuleFromFactory,
  ChangeSTVersionBound
} from "../generated/ERC20DividendCheckpointFactory/ERC20DividendCheckpointFactory"

export function createLogicContractSetEvent(
  _version: string,
  _upgrade: BigInt,
  _logicContract: Address,
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
      "_upgradeData",
      ethereum.Value.fromBytes(_upgradeData)
    )
  )

  return logicContractSetEvent
}

export function createModuleUpgradedEvent(
  _module: Address,
  _securityToken: Address,
  _version: BigInt
): ModuleUpgraded {
  let moduleUpgradedEvent = changetype<ModuleUpgraded>(newMockEvent())

  moduleUpgradedEvent.parameters = new Array()

  moduleUpgradedEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )
  moduleUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_securityToken",
      ethereum.Value.fromAddress(_securityToken)
    )
  )
  moduleUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_version",
      ethereum.Value.fromUnsignedBigInt(_version)
    )
  )

  return moduleUpgradedEvent
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

export function createChangeSetupCostEvent(
  _oldSetupCost: BigInt,
  _newSetupCost: BigInt
): ChangeSetupCost {
  let changeSetupCostEvent = changetype<ChangeSetupCost>(newMockEvent())

  changeSetupCostEvent.parameters = new Array()

  changeSetupCostEvent.parameters.push(
    new ethereum.EventParam(
      "_oldSetupCost",
      ethereum.Value.fromUnsignedBigInt(_oldSetupCost)
    )
  )
  changeSetupCostEvent.parameters.push(
    new ethereum.EventParam(
      "_newSetupCost",
      ethereum.Value.fromUnsignedBigInt(_newSetupCost)
    )
  )

  return changeSetupCostEvent
}

export function createChangeCostTypeEvent(
  _isOldCostInPoly: boolean,
  _isNewCostInPoly: boolean
): ChangeCostType {
  let changeCostTypeEvent = changetype<ChangeCostType>(newMockEvent())

  changeCostTypeEvent.parameters = new Array()

  changeCostTypeEvent.parameters.push(
    new ethereum.EventParam(
      "_isOldCostInPoly",
      ethereum.Value.fromBoolean(_isOldCostInPoly)
    )
  )
  changeCostTypeEvent.parameters.push(
    new ethereum.EventParam(
      "_isNewCostInPoly",
      ethereum.Value.fromBoolean(_isNewCostInPoly)
    )
  )

  return changeCostTypeEvent
}

export function createGenerateModuleFromFactoryEvent(
  _module: Address,
  _moduleName: Bytes,
  _moduleFactory: Address,
  _creator: Address,
  _setupCost: BigInt,
  _setupCostInPoly: BigInt
): GenerateModuleFromFactory {
  let generateModuleFromFactoryEvent =
    changetype<GenerateModuleFromFactory>(newMockEvent())

  generateModuleFromFactoryEvent.parameters = new Array()

  generateModuleFromFactoryEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )
  generateModuleFromFactoryEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleName",
      ethereum.Value.fromFixedBytes(_moduleName)
    )
  )
  generateModuleFromFactoryEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleFactory",
      ethereum.Value.fromAddress(_moduleFactory)
    )
  )
  generateModuleFromFactoryEvent.parameters.push(
    new ethereum.EventParam("_creator", ethereum.Value.fromAddress(_creator))
  )
  generateModuleFromFactoryEvent.parameters.push(
    new ethereum.EventParam(
      "_setupCost",
      ethereum.Value.fromUnsignedBigInt(_setupCost)
    )
  )
  generateModuleFromFactoryEvent.parameters.push(
    new ethereum.EventParam(
      "_setupCostInPoly",
      ethereum.Value.fromUnsignedBigInt(_setupCostInPoly)
    )
  )

  return generateModuleFromFactoryEvent
}

export function createChangeSTVersionBoundEvent(
  _boundType: string,
  _major: i32,
  _minor: i32,
  _patch: i32
): ChangeSTVersionBound {
  let changeStVersionBoundEvent =
    changetype<ChangeSTVersionBound>(newMockEvent())

  changeStVersionBoundEvent.parameters = new Array()

  changeStVersionBoundEvent.parameters.push(
    new ethereum.EventParam("_boundType", ethereum.Value.fromString(_boundType))
  )
  changeStVersionBoundEvent.parameters.push(
    new ethereum.EventParam(
      "_major",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_major))
    )
  )
  changeStVersionBoundEvent.parameters.push(
    new ethereum.EventParam(
      "_minor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_minor))
    )
  )
  changeStVersionBoundEvent.parameters.push(
    new ethereum.EventParam(
      "_patch",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_patch))
    )
  )

  return changeStVersionBoundEvent
}
