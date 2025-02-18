import {
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/STFactory/STFactory"
import {
  OwnershipTransferred,
} from "../generated/schema"
import { ethereum } from '@graphprotocol/graph-ts'
import { TokenDeployment, InternalTransaction } from '../generated/schema'
import { SecurityToken as SecurityTokenTemplate } from '../generated/templates'
import { STGetter } from "../generated/templates/STGetter/STGetter"

export function handleDeployToken(call: ethereum.Call): void {
  let tokenDeployment = new TokenDeployment(call.transaction.hash.toHexString())
  
  // Get the return value (deployed token address)
  let returnValue = call.outputValues[0].value.toAddress()
  
  tokenDeployment.token = returnValue
  tokenDeployment.creator = call.from
  tokenDeployment.name = call.inputValues[0].value.toString()
  tokenDeployment.symbol = call.inputValues[1].value.toString()
  tokenDeployment.decimals = call.inputValues[2].value.toI32()
  tokenDeployment.tokenDetails = call.inputValues[3].value.toString()
  tokenDeployment.divisible = call.inputValues[5].value.toBoolean()
  
  tokenDeployment.blockNumber = call.block.number
  tokenDeployment.blockTimestamp = call.block.timestamp
  tokenDeployment.transactionHash = call.transaction.hash

  SecurityTokenTemplate.create(returnValue)

  tokenDeployment.save()

  // internal transaction
  let internalTx = new InternalTransaction(
    call.transaction.hash.toHexString() + "-deploy"
  )
  internalTx.from = call.from
  internalTx.to = returnValue
  internalTx.value = call.transaction.value
  internalTx.methodName = "deployToken"
  internalTx.blockNumber = call.block.number
  internalTx.blockTimestamp = call.block.timestamp
  internalTx.transactionHash = call.transaction.hash
  
  internalTx.save()
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
