import {
  ERC20DividendCheckpointFactory as ERC20DividendCheckpointFactorySchema
} from "../generated/schema";
import { GenerateModuleFromFactory as GenerateModuleFromERC20DividendCheckpointFactoryEvent } from '../generated/ERC20DividendCheckpointFactory/ERC20DividendCheckpointFactory';
import { ERC20DividendCheckpoint as ERC20DividendCheckpointTemplate } from "../generated/templates"

export function handleGenerateModuleFromERC20DividendCheckpointFactory(
  event: GenerateModuleFromERC20DividendCheckpointFactoryEvent
): void {
  ERC20DividendCheckpointTemplate.create(event.params._module);

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

