import { BigInt } from "@graphprotocol/graph-ts"
import {
  TokenUpgraded as TokenUpgradedEvent,
  Transfer as TransferEvent,
} from "../generated/templates/SecurityToken/SecurityToken"
import {
  TokenUpgraded,
  Transfer,
} from "../generated/schema"

export function handleTokenUpgraded(event: TokenUpgradedEvent): void {
  let id = event.transaction.hash

  let entity = TokenUpgraded.load(id)
  if (!entity) {
    entity = new TokenUpgraded(id)
  }

  // let entity = new TokenUpgraded(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  const id = event.transaction.hash
   let entity = Transfer.load(id)

   if(!entity) {
      entity = new Transfer(id)
   }
  // let entity = new Transfer(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
