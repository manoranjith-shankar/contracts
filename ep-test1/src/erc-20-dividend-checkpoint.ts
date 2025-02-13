import {
  ERC20DividendDeposited as ERC20DividendDepositedEvent,
  ERC20DividendClaimed as ERC20DividendClaimedEvent,
  ERC20DividendReclaimed as ERC20DividendReclaimedEvent,
  ERC20DividendWithholdingWithdrawn as ERC20DividendWithholdingWithdrawnEvent,
  SetDefaultExcludedAddresses as SetDefaultExcludedAddressesEvent,
  SetWithholding as SetWithholdingEvent,
  SetWithholdingFixed as SetWithholdingFixedEvent,
  SetWallet as SetWalletEvent,
  UpdateDividendDates as UpdateDividendDatesEvent,
  Pause as PauseEvent,
  Unpause as UnpauseEvent,
} from "../generated/ERC20DividendCheckpoint/ERC20DividendCheckpoint"
import {
  ERC20DividendDeposited,
  ERC20DividendClaimed,
  ERC20DividendReclaimed,
  ERC20DividendWithholdingWithdrawn,
  SetDefaultExcludedAddresses,
  SetWithholding,
  SetWithholdingFixed,
  SetWallet,
  UpdateDividendDates,
  Pause,
  Unpause,
} from "../generated/schema"
import { Bytes } from "@graphprotocol/graph-ts"

export function handleERC20DividendDeposited(
  event: ERC20DividendDepositedEvent,
): void {
  let entity = new ERC20DividendDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._depositor = event.params._depositor
  entity._checkpointId = event.params._checkpointId
  entity._maturity = event.params._maturity
  entity._expiry = event.params._expiry
  entity._token = event.params._token
  entity._amount = event.params._amount
  entity._totalSupply = event.params._totalSupply
  entity._dividendIndex = event.params._dividendIndex
  entity._name = event.params._name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20DividendClaimed(
  event: ERC20DividendClaimedEvent,
): void {
  let entity = new ERC20DividendClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._payee = event.params._payee
  entity._dividendIndex = event.params._dividendIndex
  entity._token = event.params._token
  entity._amount = event.params._amount
  entity._withheld = event.params._withheld

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20DividendReclaimed(
  event: ERC20DividendReclaimedEvent,
): void {
  let entity = new ERC20DividendReclaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._claimer = event.params._claimer
  entity._dividendIndex = event.params._dividendIndex
  entity._token = event.params._token
  entity._claimedAmount = event.params._claimedAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20DividendWithholdingWithdrawn(
  event: ERC20DividendWithholdingWithdrawnEvent,
): void {
  let entity = new ERC20DividendWithholdingWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._claimer = event.params._claimer
  entity._dividendIndex = event.params._dividendIndex
  entity._token = event.params._token
  entity._withheldAmount = event.params._withheldAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetDefaultExcludedAddresses(
  event: SetDefaultExcludedAddressesEvent,
): void {
  let entity = new SetDefaultExcludedAddresses(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._excluded = changetype<Bytes[]>(event.params._excluded)

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetWithholding(event: SetWithholdingEvent): void {
  let entity = new SetWithholding(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._investors = changetype<Bytes[]>(event.params._investors)
  entity._withholding = event.params._withholding

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetWithholdingFixed(
  event: SetWithholdingFixedEvent,
): void {
  let entity = new SetWithholdingFixed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._investors = changetype<Bytes[]>(event.params._investors)
  entity._withholding = event.params._withholding

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetWallet(event: SetWalletEvent): void {
  let entity = new SetWallet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._oldWallet = event.params._oldWallet
  entity._newWallet = event.params._newWallet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateDividendDates(
  event: UpdateDividendDatesEvent,
): void {
  let entity = new UpdateDividendDates(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity._dividendIndex = event.params._dividendIndex
  entity._maturity = event.params._maturity
  entity._expiry = event.params._expiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
