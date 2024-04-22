import { Bytes } from '@graphprotocol/graph-ts'

import { GenerateModuleFromFactory as GenerateModuleFromUSDTieredSTOFactoryEvent } from "../../generated/USDTieredSTOFactory/ModuleFactory"
import { 
  USDTieredSTOFactory as USDTieredSTOFactorySchema, 
  ERC20DividendCheckpointFactory as ERC20DividendCheckpointFactorySchema
} from "../../generated/schema";
import { GenerateModuleFromFactory as GenerateModuleFromERC20DividendCheckpointFactoryEvent } from '../../generated/ERC20DividendCheckpointFactory/ERC20DividendCheckpointFactory';
import { ERC20DividendCheckpoint, USDTieredSTO } from "../../generated/templates"


export function handleGenerateModuleFromUSDTieredSTOFactory(
  event: GenerateModuleFromUSDTieredSTOFactoryEvent
): void {
  USDTieredSTO.create(event.params._module);

  const id = event.transaction.hash.toHex();

  let entity = USDTieredSTOFactorySchema.load(id)

  if (!entity) {
    entity = new USDTieredSTOFactorySchema(id)
  }

  entity.module = event.params._module;
  entity.moduleName = event.params._moduleName;
  entity.moduleFactory = event.params._moduleFactory;
  entity.creator = event.params._creator;
  entity.setupCost = event.params._setupCost;
  entity.setupCostInPoly = event.params._setupCostInPoly;
  entity.timestamp = event.block.timestamp;
  entity.from = event.transaction.from;

  entity.save()
}

export function handleGenerateModuleFromERC20DividendCheckpointFactory(
  event: GenerateModuleFromERC20DividendCheckpointFactoryEvent
): void {
  ERC20DividendCheckpoint.create(event.params._module);

  const id = event.transaction.hash.toHex();

  let entity = ERC20DividendCheckpointFactorySchema.load(id)

  if (!entity) {
    entity = new ERC20DividendCheckpointFactorySchema(id)
  }

  entity.module = event.params._module;
  entity.moduleName = event.params._moduleName;
  entity.moduleFactory = event.params._moduleFactory;
  entity.creator = event.params._creator;
  entity.setupCost = event.params._setupCost;
  entity.setupCostInPoly = event.params._setupCostInPoly;
  entity.timestamp = event.block.timestamp;
  entity.from = event.transaction.from;

  entity.save()
}

