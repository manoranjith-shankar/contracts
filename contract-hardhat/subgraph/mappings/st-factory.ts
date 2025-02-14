import {
    LogicContractSet as LogicContractSetEvent,
  } from "../../../ep-test/generated/STFactory/STFactory"
  import {
    LogicContractSet,
  } from "../../../ep-test/generated/schema"
  
  export function handleLogicContractSet(event: LogicContractSetEvent): void {
    let entity = new LogicContractSet(
      event.transaction.hash.concatI32(event.logIndex.toI32())
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