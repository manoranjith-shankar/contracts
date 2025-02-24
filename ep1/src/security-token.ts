import { Address, BigInt, log } from '@graphprotocol/graph-ts'
import {
  SecurityToken as SecurityTokenContract,
  Transfer as TransferEvent
} from '../generated/templates/SecurityToken/SecurityToken'
import { 
  SecurityToken as SecurityTokenSchema, 
  Transfer as TransferSchema,
  UserCheckpointBalance as UserCheckpointBalanceSchema,
  ERC20DividendDeposited as ERC20DividendDepositedSchema
} from '../generated/schema'
import { SecurityToken as SecurityTokenTemplate } from '../generated/templates'

export function handleTransfer(event: TransferEvent): void {
  const id = event.transaction.hash;
  let token = SecurityTokenSchema.load(event.address.toHexString())
  let entity = TransferSchema.load(id)

  if(!entity) {
    entity = new TransferSchema(id)
  }

  if (!token) {
    token = new SecurityTokenSchema(event.address.toHexString())
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
  entity.token = event.address.toHexString()
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  const securityToken = SecurityTokenContract.bind(event.address)

  const currentCheckpoint = securityToken.currentCheckpointId()
  token.currentCheckpoint = currentCheckpoint
  token.save()

  for (let checkpointId = BigInt.fromI32(0); checkpointId.le(currentCheckpoint); checkpointId = checkpointId.plus(BigInt.fromI32(1))) {

    const dividends = ERC20DividendDepositedSchema.load(checkpointId.toString()) // Change to corresponding relation with erc20DividendDepositedSchema
    if (event.params.from.toHexString() !== '0x0000000000000000000000000000000000000000') {    
    const fromBalanceId = event.params.from.toHexString()
      .concat('-')
      .concat(event.address.toHexString())
      .concat('-')
      .concat(checkpointId.toString())
    let fromBalanceEntity = UserCheckpointBalanceSchema.load(fromBalanceId)
    if (!fromBalanceEntity) {
      fromBalanceEntity = new UserCheckpointBalanceSchema(fromBalanceId)
    }
    fromBalanceEntity.userAddress = event.params.from
    fromBalanceEntity.checkpoint = checkpointId

    const balance = securityToken.balanceOfAt(event.params.from, checkpointId)
    fromBalanceEntity.checkpointBalance = balance

    if (dividends) {
      const calculatedDividend = balance.times(dividends.amount).div(dividends.totalSupply)
      fromBalanceEntity.calculatedDividend = calculatedDividend
    } else {
      fromBalanceEntity.calculatedDividend = BigInt.fromI32(0)
    }

    fromBalanceEntity.token = event.address.toHexString()
    fromBalanceEntity.transferAmount = event.params.value
    fromBalanceEntity.transactionHash = event.transaction.hash
    fromBalanceEntity.save()
  }

  if (event.params.to.toHexString() !== '0x0000000000000000000000000000000000000000') {
    const toBalanceId = event.params.to.toHexString()
    .concat('-')
    .concat(event.address.toHexString())
    .concat('-')
    .concat(checkpointId.toString())
    let toBalanceEntity = UserCheckpointBalanceSchema.load(toBalanceId)
    if (!toBalanceEntity) {
      toBalanceEntity = new UserCheckpointBalanceSchema(toBalanceId)
    }
    toBalanceEntity.userAddress = event.params.to
    toBalanceEntity.checkpoint = checkpointId

    const balance = securityToken.balanceOfAt(event.params.to, checkpointId)
    toBalanceEntity.checkpointBalance = balance

    if (dividends) {
      const calculatedDividend = balance.times(dividends.amount).div(dividends.totalSupply)
      toBalanceEntity.calculatedDividend = calculatedDividend
    } else {
      toBalanceEntity.calculatedDividend = BigInt.fromI32(0)
    }

    toBalanceEntity.token = event.address.toHexString()
    toBalanceEntity.transferAmount = event.params.value
    toBalanceEntity.transactionHash = event.transaction.hash
    toBalanceEntity.save()
  }
}
}
