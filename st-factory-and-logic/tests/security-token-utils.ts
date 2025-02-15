import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ModuleAdded,
  ModuleUpgraded,
  UpdateTokenDetails,
  UpdateTokenName,
  GranularityChanged,
  FreezeIssuance,
  FreezeTransfers,
  CheckpointCreated,
  SetController,
  TreasuryWalletChanged,
  DisableController,
  OwnershipTransferred,
  TokenUpgraded,
  ModuleArchived,
  ModuleUnarchived,
  ModuleRemoved,
  ModuleBudgetChanged,
  TransferByPartition,
  AuthorizedOperator,
  RevokedOperator,
  AuthorizedOperatorByPartition,
  RevokedOperatorByPartition,
  IssuedByPartition,
  RedeemedByPartition,
  ControllerTransfer,
  ControllerRedemption,
  DocumentRemoved,
  DocumentUpdated,
  Issued,
  Redeemed,
  Transfer,
  Approval
} from "../generated/SecurityToken/SecurityToken"

export function createModuleAddedEvent(
  _types: Array<i32>,
  _name: Bytes,
  _moduleFactory: Address,
  _module: Address,
  _moduleCost: BigInt,
  _budget: BigInt,
  _label: Bytes,
  _archived: boolean
): ModuleAdded {
  let moduleAddedEvent = changetype<ModuleAdded>(newMockEvent())

  moduleAddedEvent.parameters = new Array()

  moduleAddedEvent.parameters.push(
    new ethereum.EventParam("_types", ethereum.Value.fromI32Array(_types))
  )
  moduleAddedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )
  moduleAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleFactory",
      ethereum.Value.fromAddress(_moduleFactory)
    )
  )
  moduleAddedEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )
  moduleAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleCost",
      ethereum.Value.fromUnsignedBigInt(_moduleCost)
    )
  )
  moduleAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_budget",
      ethereum.Value.fromUnsignedBigInt(_budget)
    )
  )
  moduleAddedEvent.parameters.push(
    new ethereum.EventParam("_label", ethereum.Value.fromFixedBytes(_label))
  )
  moduleAddedEvent.parameters.push(
    new ethereum.EventParam("_archived", ethereum.Value.fromBoolean(_archived))
  )

  return moduleAddedEvent
}

export function createModuleUpgradedEvent(
  _types: Array<i32>,
  _module: Address
): ModuleUpgraded {
  let moduleUpgradedEvent = changetype<ModuleUpgraded>(newMockEvent())

  moduleUpgradedEvent.parameters = new Array()

  moduleUpgradedEvent.parameters.push(
    new ethereum.EventParam("_types", ethereum.Value.fromI32Array(_types))
  )
  moduleUpgradedEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )

  return moduleUpgradedEvent
}

export function createUpdateTokenDetailsEvent(
  _oldDetails: string,
  _newDetails: string
): UpdateTokenDetails {
  let updateTokenDetailsEvent = changetype<UpdateTokenDetails>(newMockEvent())

  updateTokenDetailsEvent.parameters = new Array()

  updateTokenDetailsEvent.parameters.push(
    new ethereum.EventParam(
      "_oldDetails",
      ethereum.Value.fromString(_oldDetails)
    )
  )
  updateTokenDetailsEvent.parameters.push(
    new ethereum.EventParam(
      "_newDetails",
      ethereum.Value.fromString(_newDetails)
    )
  )

  return updateTokenDetailsEvent
}

export function createUpdateTokenNameEvent(
  _oldName: string,
  _newName: string
): UpdateTokenName {
  let updateTokenNameEvent = changetype<UpdateTokenName>(newMockEvent())

  updateTokenNameEvent.parameters = new Array()

  updateTokenNameEvent.parameters.push(
    new ethereum.EventParam("_oldName", ethereum.Value.fromString(_oldName))
  )
  updateTokenNameEvent.parameters.push(
    new ethereum.EventParam("_newName", ethereum.Value.fromString(_newName))
  )

  return updateTokenNameEvent
}

export function createGranularityChangedEvent(
  _oldGranularity: BigInt,
  _newGranularity: BigInt
): GranularityChanged {
  let granularityChangedEvent = changetype<GranularityChanged>(newMockEvent())

  granularityChangedEvent.parameters = new Array()

  granularityChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldGranularity",
      ethereum.Value.fromUnsignedBigInt(_oldGranularity)
    )
  )
  granularityChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_newGranularity",
      ethereum.Value.fromUnsignedBigInt(_newGranularity)
    )
  )

  return granularityChangedEvent
}

export function createFreezeIssuanceEvent(): FreezeIssuance {
  let freezeIssuanceEvent = changetype<FreezeIssuance>(newMockEvent())

  freezeIssuanceEvent.parameters = new Array()

  return freezeIssuanceEvent
}

export function createFreezeTransfersEvent(_status: boolean): FreezeTransfers {
  let freezeTransfersEvent = changetype<FreezeTransfers>(newMockEvent())

  freezeTransfersEvent.parameters = new Array()

  freezeTransfersEvent.parameters.push(
    new ethereum.EventParam("_status", ethereum.Value.fromBoolean(_status))
  )

  return freezeTransfersEvent
}

export function createCheckpointCreatedEvent(
  _checkpointId: BigInt,
  _investorLength: BigInt
): CheckpointCreated {
  let checkpointCreatedEvent = changetype<CheckpointCreated>(newMockEvent())

  checkpointCreatedEvent.parameters = new Array()

  checkpointCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_checkpointId",
      ethereum.Value.fromUnsignedBigInt(_checkpointId)
    )
  )
  checkpointCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_investorLength",
      ethereum.Value.fromUnsignedBigInt(_investorLength)
    )
  )

  return checkpointCreatedEvent
}

export function createSetControllerEvent(
  _oldController: Address,
  _newController: Address
): SetController {
  let setControllerEvent = changetype<SetController>(newMockEvent())

  setControllerEvent.parameters = new Array()

  setControllerEvent.parameters.push(
    new ethereum.EventParam(
      "_oldController",
      ethereum.Value.fromAddress(_oldController)
    )
  )
  setControllerEvent.parameters.push(
    new ethereum.EventParam(
      "_newController",
      ethereum.Value.fromAddress(_newController)
    )
  )

  return setControllerEvent
}

export function createTreasuryWalletChangedEvent(
  _oldTreasuryWallet: Address,
  _newTreasuryWallet: Address
): TreasuryWalletChanged {
  let treasuryWalletChangedEvent =
    changetype<TreasuryWalletChanged>(newMockEvent())

  treasuryWalletChangedEvent.parameters = new Array()

  treasuryWalletChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldTreasuryWallet",
      ethereum.Value.fromAddress(_oldTreasuryWallet)
    )
  )
  treasuryWalletChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_newTreasuryWallet",
      ethereum.Value.fromAddress(_newTreasuryWallet)
    )
  )

  return treasuryWalletChangedEvent
}

export function createDisableControllerEvent(): DisableController {
  let disableControllerEvent = changetype<DisableController>(newMockEvent())

  disableControllerEvent.parameters = new Array()

  return disableControllerEvent
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

export function createTokenUpgradedEvent(
  _major: i32,
  _minor: i32,
  _patch: i32
): TokenUpgraded {
  let tokenUpgradedEvent = changetype<TokenUpgraded>(newMockEvent())

  tokenUpgradedEvent.parameters = new Array()

  tokenUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_major",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_major))
    )
  )
  tokenUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_minor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_minor))
    )
  )
  tokenUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "_patch",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_patch))
    )
  )

  return tokenUpgradedEvent
}

export function createModuleArchivedEvent(
  _types: Array<i32>,
  _module: Address
): ModuleArchived {
  let moduleArchivedEvent = changetype<ModuleArchived>(newMockEvent())

  moduleArchivedEvent.parameters = new Array()

  moduleArchivedEvent.parameters.push(
    new ethereum.EventParam("_types", ethereum.Value.fromI32Array(_types))
  )
  moduleArchivedEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )

  return moduleArchivedEvent
}

export function createModuleUnarchivedEvent(
  _types: Array<i32>,
  _module: Address
): ModuleUnarchived {
  let moduleUnarchivedEvent = changetype<ModuleUnarchived>(newMockEvent())

  moduleUnarchivedEvent.parameters = new Array()

  moduleUnarchivedEvent.parameters.push(
    new ethereum.EventParam("_types", ethereum.Value.fromI32Array(_types))
  )
  moduleUnarchivedEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )

  return moduleUnarchivedEvent
}

export function createModuleRemovedEvent(
  _types: Array<i32>,
  _module: Address
): ModuleRemoved {
  let moduleRemovedEvent = changetype<ModuleRemoved>(newMockEvent())

  moduleRemovedEvent.parameters = new Array()

  moduleRemovedEvent.parameters.push(
    new ethereum.EventParam("_types", ethereum.Value.fromI32Array(_types))
  )
  moduleRemovedEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )

  return moduleRemovedEvent
}

export function createModuleBudgetChangedEvent(
  _moduleTypes: Array<i32>,
  _module: Address,
  _oldBudget: BigInt,
  _budget: BigInt
): ModuleBudgetChanged {
  let moduleBudgetChangedEvent = changetype<ModuleBudgetChanged>(newMockEvent())

  moduleBudgetChangedEvent.parameters = new Array()

  moduleBudgetChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleTypes",
      ethereum.Value.fromI32Array(_moduleTypes)
    )
  )
  moduleBudgetChangedEvent.parameters.push(
    new ethereum.EventParam("_module", ethereum.Value.fromAddress(_module))
  )
  moduleBudgetChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldBudget",
      ethereum.Value.fromUnsignedBigInt(_oldBudget)
    )
  )
  moduleBudgetChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_budget",
      ethereum.Value.fromUnsignedBigInt(_budget)
    )
  )

  return moduleBudgetChangedEvent
}

export function createTransferByPartitionEvent(
  _fromPartition: Bytes,
  _operator: Address,
  _from: Address,
  _to: Address,
  _value: BigInt,
  _data: Bytes,
  _operatorData: Bytes
): TransferByPartition {
  let transferByPartitionEvent = changetype<TransferByPartition>(newMockEvent())

  transferByPartitionEvent.parameters = new Array()

  transferByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "_fromPartition",
      ethereum.Value.fromFixedBytes(_fromPartition)
    )
  )
  transferByPartitionEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  transferByPartitionEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferByPartitionEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  transferByPartitionEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  transferByPartitionEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )
  transferByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "_operatorData",
      ethereum.Value.fromBytes(_operatorData)
    )
  )

  return transferByPartitionEvent
}

export function createAuthorizedOperatorEvent(
  operator: Address,
  tokenHolder: Address
): AuthorizedOperator {
  let authorizedOperatorEvent = changetype<AuthorizedOperator>(newMockEvent())

  authorizedOperatorEvent.parameters = new Array()

  authorizedOperatorEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  authorizedOperatorEvent.parameters.push(
    new ethereum.EventParam(
      "tokenHolder",
      ethereum.Value.fromAddress(tokenHolder)
    )
  )

  return authorizedOperatorEvent
}

export function createRevokedOperatorEvent(
  operator: Address,
  tokenHolder: Address
): RevokedOperator {
  let revokedOperatorEvent = changetype<RevokedOperator>(newMockEvent())

  revokedOperatorEvent.parameters = new Array()

  revokedOperatorEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  revokedOperatorEvent.parameters.push(
    new ethereum.EventParam(
      "tokenHolder",
      ethereum.Value.fromAddress(tokenHolder)
    )
  )

  return revokedOperatorEvent
}

export function createAuthorizedOperatorByPartitionEvent(
  partition: Bytes,
  operator: Address,
  tokenHolder: Address
): AuthorizedOperatorByPartition {
  let authorizedOperatorByPartitionEvent =
    changetype<AuthorizedOperatorByPartition>(newMockEvent())

  authorizedOperatorByPartitionEvent.parameters = new Array()

  authorizedOperatorByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "partition",
      ethereum.Value.fromFixedBytes(partition)
    )
  )
  authorizedOperatorByPartitionEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  authorizedOperatorByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenHolder",
      ethereum.Value.fromAddress(tokenHolder)
    )
  )

  return authorizedOperatorByPartitionEvent
}

export function createRevokedOperatorByPartitionEvent(
  partition: Bytes,
  operator: Address,
  tokenHolder: Address
): RevokedOperatorByPartition {
  let revokedOperatorByPartitionEvent =
    changetype<RevokedOperatorByPartition>(newMockEvent())

  revokedOperatorByPartitionEvent.parameters = new Array()

  revokedOperatorByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "partition",
      ethereum.Value.fromFixedBytes(partition)
    )
  )
  revokedOperatorByPartitionEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  revokedOperatorByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenHolder",
      ethereum.Value.fromAddress(tokenHolder)
    )
  )

  return revokedOperatorByPartitionEvent
}

export function createIssuedByPartitionEvent(
  partition: Bytes,
  to: Address,
  value: BigInt,
  data: Bytes
): IssuedByPartition {
  let issuedByPartitionEvent = changetype<IssuedByPartition>(newMockEvent())

  issuedByPartitionEvent.parameters = new Array()

  issuedByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "partition",
      ethereum.Value.fromFixedBytes(partition)
    )
  )
  issuedByPartitionEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  issuedByPartitionEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  issuedByPartitionEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return issuedByPartitionEvent
}

export function createRedeemedByPartitionEvent(
  partition: Bytes,
  operator: Address,
  from: Address,
  value: BigInt,
  data: Bytes,
  operatorData: Bytes
): RedeemedByPartition {
  let redeemedByPartitionEvent = changetype<RedeemedByPartition>(newMockEvent())

  redeemedByPartitionEvent.parameters = new Array()

  redeemedByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "partition",
      ethereum.Value.fromFixedBytes(partition)
    )
  )
  redeemedByPartitionEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  redeemedByPartitionEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  redeemedByPartitionEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  redeemedByPartitionEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )
  redeemedByPartitionEvent.parameters.push(
    new ethereum.EventParam(
      "operatorData",
      ethereum.Value.fromBytes(operatorData)
    )
  )

  return redeemedByPartitionEvent
}

export function createControllerTransferEvent(
  _controller: Address,
  _from: Address,
  _to: Address,
  _value: BigInt,
  _data: Bytes,
  _operatorData: Bytes
): ControllerTransfer {
  let controllerTransferEvent = changetype<ControllerTransfer>(newMockEvent())

  controllerTransferEvent.parameters = new Array()

  controllerTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_controller",
      ethereum.Value.fromAddress(_controller)
    )
  )
  controllerTransferEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  controllerTransferEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  controllerTransferEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  controllerTransferEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )
  controllerTransferEvent.parameters.push(
    new ethereum.EventParam(
      "_operatorData",
      ethereum.Value.fromBytes(_operatorData)
    )
  )

  return controllerTransferEvent
}

export function createControllerRedemptionEvent(
  _controller: Address,
  _tokenHolder: Address,
  _value: BigInt,
  _data: Bytes,
  _operatorData: Bytes
): ControllerRedemption {
  let controllerRedemptionEvent =
    changetype<ControllerRedemption>(newMockEvent())

  controllerRedemptionEvent.parameters = new Array()

  controllerRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "_controller",
      ethereum.Value.fromAddress(_controller)
    )
  )
  controllerRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenHolder",
      ethereum.Value.fromAddress(_tokenHolder)
    )
  )
  controllerRedemptionEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  controllerRedemptionEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )
  controllerRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "_operatorData",
      ethereum.Value.fromBytes(_operatorData)
    )
  )

  return controllerRedemptionEvent
}

export function createDocumentRemovedEvent(
  _name: Bytes,
  _uri: string,
  _documentHash: Bytes
): DocumentRemoved {
  let documentRemovedEvent = changetype<DocumentRemoved>(newMockEvent())

  documentRemovedEvent.parameters = new Array()

  documentRemovedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )
  documentRemovedEvent.parameters.push(
    new ethereum.EventParam("_uri", ethereum.Value.fromString(_uri))
  )
  documentRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_documentHash",
      ethereum.Value.fromFixedBytes(_documentHash)
    )
  )

  return documentRemovedEvent
}

export function createDocumentUpdatedEvent(
  _name: Bytes,
  _uri: string,
  _documentHash: Bytes
): DocumentUpdated {
  let documentUpdatedEvent = changetype<DocumentUpdated>(newMockEvent())

  documentUpdatedEvent.parameters = new Array()

  documentUpdatedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )
  documentUpdatedEvent.parameters.push(
    new ethereum.EventParam("_uri", ethereum.Value.fromString(_uri))
  )
  documentUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_documentHash",
      ethereum.Value.fromFixedBytes(_documentHash)
    )
  )

  return documentUpdatedEvent
}

export function createIssuedEvent(
  _operator: Address,
  _to: Address,
  _value: BigInt,
  _data: Bytes
): Issued {
  let issuedEvent = changetype<Issued>(newMockEvent())

  issuedEvent.parameters = new Array()

  issuedEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  issuedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  issuedEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  issuedEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )

  return issuedEvent
}

export function createRedeemedEvent(
  _operator: Address,
  _from: Address,
  _value: BigInt,
  _data: Bytes
): Redeemed {
  let redeemedEvent = changetype<Redeemed>(newMockEvent())

  redeemedEvent.parameters = new Array()

  redeemedEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )

  return redeemedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}
