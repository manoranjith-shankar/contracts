import { Address, BigInt, log } from '@graphprotocol/graph-ts'
import {
  SecurityToken as SecurityTokenContract,
  Transfer as TransferEvent
} from '../generated/templates/SecurityToken/SecurityToken'
import { SecurityToken, Transfer as TransferSchema, UserCheckpointBalance } from '../generated/schema'
import { SecurityToken as SecurityTokenTemplate } from '../generated/templates'
import { STGetter as STGetterContract } from '../generated/templates/STGetter/STGetter'
import { ethereum } from '@graphprotocol/graph-ts'

export function handleTransfer(event: TransferEvent): void {
  const id = event.transaction.hash;
  let token = SecurityToken.load(event.address.toHexString())
  let entity = TransferSchema.load(id)

  if(!entity) {
    entity = new TransferSchema(id)
  }

  if (!token) {
    token = new SecurityToken(event.address.toHexString())
    token.address = event.address
    token.currentCheckpoint = BigInt.fromI32(0)
    
    const contract = SecurityTokenContract.bind(event.address)
    token.name = contract.name()
    token.symbol = contract.symbol()
    token.decimals = contract.decimals()
    
    SecurityTokenTemplate.create(event.address)
  }

  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  const securityToken = SecurityTokenContract.bind(event.address)

  const currentCheckpoint = securityToken.currentCheckpointId()
  token.currentCheckpoint = currentCheckpoint
  token.save()

  for (let checkpointId = BigInt.fromI32(0); checkpointId.le(currentCheckpoint); checkpointId = checkpointId.plus(BigInt.fromI32(1))) {

    if (event.params.from.toHexString() !== '0x0000000000000000000000000000000000000000') {    
    const fromBalanceId = event.params.from.toHexString().concat('-').concat(checkpointId.toString())
    let fromBalanceEntity = UserCheckpointBalance.load(fromBalanceId)
    if (!fromBalanceEntity) {
      fromBalanceEntity = new UserCheckpointBalance(fromBalanceId)
      fromBalanceEntity.userAddress = event.params.from
      fromBalanceEntity.checkpoint = checkpointId
    }
    fromBalanceEntity.checkpointBalance = securityToken.balanceOfAt(event.params.from, checkpointId)
    fromBalanceEntity.token = event.address.toHexString()
    fromBalanceEntity.transferAmount = event.params.value
    fromBalanceEntity.transactionHash = event.transaction.hash
    fromBalanceEntity.save()
  }

  if (event.params.to.toHexString() !== '0x0000000000000000000000000000000000000000') {
    const toBalanceId = event.params.to.toHexString().concat('-').concat(checkpointId.toString())
    let toBalanceEntity = UserCheckpointBalance.load(toBalanceId)
    if (!toBalanceEntity) {
      toBalanceEntity = new UserCheckpointBalance(toBalanceId)
      toBalanceEntity.userAddress = event.params.to
      toBalanceEntity.checkpoint = checkpointId
    }
    toBalanceEntity.checkpointBalance = securityToken.balanceOfAt(event.params.to, checkpointId)
    toBalanceEntity.token = event.address.toHexString()
    toBalanceEntity.transferAmount = event.params.value
    toBalanceEntity.transactionHash = event.transaction.hash
    toBalanceEntity.save()
  }
}
}

export function handleCurrentCheckpointId(call: ethereum.Call): void {
  let token = SecurityToken.load(call.to.toHexString())
  if (!token) {
    token = new SecurityToken(call.to.toHexString())
    token.address = call.to
    
    let contract = SecurityTokenContract.bind(call.to)
    token.name = contract.name()
    token.symbol = contract.symbol()
    token.decimals = contract.decimals()
  }
  
  token.currentCheckpoint = call.outputValues[0].value.toBigInt()
  token.save()
}

export function handleBalanceOfAt(call: ethereum.Call): void {
  let stGetter = STGetterContract.bind(call.to)
  log.info('handleBalanceOfAt', [stGetter._address.toHexString()])
}