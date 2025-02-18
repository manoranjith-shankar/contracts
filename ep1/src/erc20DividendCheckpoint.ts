import { BigInt } from "@graphprotocol/graph-ts";
import { ERC20DividendDeposited as ERC20DividendDepositedSchema } from "../generated/schema"
import { ERC20DividendDeposited } from "../generated/templates/ERC20DividendCheckpoint/ERC20DividendCheckpoint";
import { ERC20DividendCheckpoint as ERC20DividendCheckpointContract } from "../generated/templates/ERC20DividendCheckpoint/ERC20DividendCheckpoint";

export function handleDividendCreation(event: ERC20DividendDeposited): void {
  const id = event.transaction.hash.toHex();

  let entity = ERC20DividendDepositedSchema.load(id)

  if (!entity) {
    entity = new ERC20DividendDepositedSchema(id)
  }

  entity.depositor = event.params._depositor;
  entity.checkpointId = event.params._checkpointId;
  entity.maturity = event.params._maturity;
  entity.expiry = event.params._expiry;
  entity.token = event.params._token;
  entity.amount = event.params._amount;
  entity.totalSupply = event.params._totalSupply;
  entity.dividendIndex = event.params._dividendIndex;
  entity.name = event.params._name;
  entity.contractAddress = event.address;
  entity.timestamp = event.block.timestamp;

  entity.save();
}





