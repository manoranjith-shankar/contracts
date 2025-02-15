import {
  ModuleAdded as ModuleAddedEvent,
  ModuleUpgraded as ModuleUpgradedEvent,
  UpdateTokenDetails as UpdateTokenDetailsEvent,
  UpdateTokenName as UpdateTokenNameEvent,
  GranularityChanged as GranularityChangedEvent,
  FreezeIssuance as FreezeIssuanceEvent,
  FreezeTransfers as FreezeTransfersEvent,
  CheckpointCreated as CheckpointCreatedEvent,
  SetController as SetControllerEvent,
  TreasuryWalletChanged as TreasuryWalletChangedEvent,
  DisableController as DisableControllerEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenUpgraded as TokenUpgradedEvent,
  ModuleArchived as ModuleArchivedEvent,
  ModuleUnarchived as ModuleUnarchivedEvent,
  ModuleRemoved as ModuleRemovedEvent,
  ModuleBudgetChanged as ModuleBudgetChangedEvent,
  TransferByPartition as TransferByPartitionEvent,
  AuthorizedOperator as AuthorizedOperatorEvent,
  RevokedOperator as RevokedOperatorEvent,
  AuthorizedOperatorByPartition as AuthorizedOperatorByPartitionEvent,
  RevokedOperatorByPartition as RevokedOperatorByPartitionEvent,
  IssuedByPartition as IssuedByPartitionEvent,
  RedeemedByPartition as RedeemedByPartitionEvent,
  ControllerTransfer as ControllerTransferEvent,
  ControllerRedemption as ControllerRedemptionEvent,
  DocumentRemoved as DocumentRemovedEvent,
  DocumentUpdated as DocumentUpdatedEvent,
  Issued as IssuedEvent,
  Redeemed as RedeemedEvent,
  Transfer as TransferEvent,
  Approval as ApprovalEvent
} from "../generated/SecurityToken/SecurityToken"
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
} from "../generated/schema"

export function handleModuleAdded(event: ModuleAddedEvent): void {
  let entity = new ModuleAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._types = event.params._types
  entity._name = event.params._name
  entity._moduleFactory = event.params._moduleFactory
  entity._module = event.params._module
  entity._moduleCost = event.params._moduleCost
  entity._budget = event.params._budget
  entity._label = event.params._label
  entity._archived = event.params._archived

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleUpgraded(event: ModuleUpgradedEvent): void {
  let entity = new ModuleUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._types = event.params._types
  entity._module = event.params._module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateTokenDetails(event: UpdateTokenDetailsEvent): void {
  let entity = new UpdateTokenDetails(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldDetails = event.params._oldDetails
  entity._newDetails = event.params._newDetails

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateTokenName(event: UpdateTokenNameEvent): void {
  let entity = new UpdateTokenName(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldName = event.params._oldName
  entity._newName = event.params._newName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGranularityChanged(event: GranularityChangedEvent): void {
  let entity = new GranularityChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldGranularity = event.params._oldGranularity
  entity._newGranularity = event.params._newGranularity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFreezeIssuance(event: FreezeIssuanceEvent): void {
  let entity = new FreezeIssuance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFreezeTransfers(event: FreezeTransfersEvent): void {
  let entity = new FreezeTransfers(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._status = event.params._status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCheckpointCreated(event: CheckpointCreatedEvent): void {
  let entity = new CheckpointCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._checkpointId = event.params._checkpointId
  entity._investorLength = event.params._investorLength

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetController(event: SetControllerEvent): void {
  let entity = new SetController(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldController = event.params._oldController
  entity._newController = event.params._newController

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasuryWalletChanged(
  event: TreasuryWalletChangedEvent
): void {
  let entity = new TreasuryWalletChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldTreasuryWallet = event.params._oldTreasuryWallet
  entity._newTreasuryWallet = event.params._newTreasuryWallet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisableController(event: DisableControllerEvent): void {
  let entity = new DisableController(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

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

export function handleTokenUpgraded(event: TokenUpgradedEvent): void {
  let entity = new TokenUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._major = event.params._major
  entity._minor = event.params._minor
  entity._patch = event.params._patch

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleArchived(event: ModuleArchivedEvent): void {
  let entity = new ModuleArchived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._types = event.params._types
  entity._module = event.params._module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleUnarchived(event: ModuleUnarchivedEvent): void {
  let entity = new ModuleUnarchived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._types = event.params._types
  entity._module = event.params._module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleRemoved(event: ModuleRemovedEvent): void {
  let entity = new ModuleRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._types = event.params._types
  entity._module = event.params._module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleBudgetChanged(
  event: ModuleBudgetChangedEvent
): void {
  let entity = new ModuleBudgetChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._moduleTypes = event.params._moduleTypes
  entity._module = event.params._module
  entity._oldBudget = event.params._oldBudget
  entity._budget = event.params._budget

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferByPartition(
  event: TransferByPartitionEvent
): void {
  let entity = new TransferByPartition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fromPartition = event.params._fromPartition
  entity._operator = event.params._operator
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value
  entity._data = event.params._data
  entity._operatorData = event.params._operatorData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuthorizedOperator(event: AuthorizedOperatorEvent): void {
  let entity = new AuthorizedOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.tokenHolder = event.params.tokenHolder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevokedOperator(event: RevokedOperatorEvent): void {
  let entity = new RevokedOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.tokenHolder = event.params.tokenHolder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuthorizedOperatorByPartition(
  event: AuthorizedOperatorByPartitionEvent
): void {
  let entity = new AuthorizedOperatorByPartition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.partition = event.params.partition
  entity.operator = event.params.operator
  entity.tokenHolder = event.params.tokenHolder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevokedOperatorByPartition(
  event: RevokedOperatorByPartitionEvent
): void {
  let entity = new RevokedOperatorByPartition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.partition = event.params.partition
  entity.operator = event.params.operator
  entity.tokenHolder = event.params.tokenHolder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIssuedByPartition(event: IssuedByPartitionEvent): void {
  let entity = new IssuedByPartition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.partition = event.params.partition
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeemedByPartition(
  event: RedeemedByPartitionEvent
): void {
  let entity = new RedeemedByPartition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.partition = event.params.partition
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.value = event.params.value
  entity.data = event.params.data
  entity.operatorData = event.params.operatorData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleControllerTransfer(event: ControllerTransferEvent): void {
  let entity = new ControllerTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._controller = event.params._controller
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value
  entity._data = event.params._data
  entity._operatorData = event.params._operatorData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleControllerRedemption(
  event: ControllerRedemptionEvent
): void {
  let entity = new ControllerRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._controller = event.params._controller
  entity._tokenHolder = event.params._tokenHolder
  entity._value = event.params._value
  entity._data = event.params._data
  entity._operatorData = event.params._operatorData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDocumentRemoved(event: DocumentRemovedEvent): void {
  let entity = new DocumentRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name
  entity._uri = event.params._uri
  entity._documentHash = event.params._documentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDocumentUpdated(event: DocumentUpdatedEvent): void {
  let entity = new DocumentUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name
  entity._uri = event.params._uri
  entity._documentHash = event.params._documentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIssued(event: IssuedEvent): void {
  let entity = new Issued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._operator = event.params._operator
  entity._to = event.params._to
  entity._value = event.params._value
  entity._data = event.params._data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeemed(event: RedeemedEvent): void {
  let entity = new Redeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._operator = event.params._operator
  entity._from = event.params._from
  entity._value = event.params._value
  entity._data = event.params._data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
