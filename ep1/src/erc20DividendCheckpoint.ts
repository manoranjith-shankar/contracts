import { 
  ERC20DividendDeposited as ERC20DividendDepositedSchema,
  ERC20DividendClaimed as ERC20DividendClaimedSchema
} from "../generated/schema"
import { 
  ERC20DividendDeposited as ERC20DividendDepositedEvent,
  ERC20DividendClaimed as ERC20DividendClaimedEvent,
} from "../generated/templates/ERC20DividendCheckpoint/ERC20DividendCheckpoint";

export function handleDividendCreation(event: ERC20DividendDepositedEvent): void {
  const id = event.params._token.toHex().concat('-').concat(event.params._checkpointId.toString());

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
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDividendClaim(event: ERC20DividendClaimedEvent): void {
  const id = event.transaction.hash.toHex();

  let entity = new ERC20DividendClaimedSchema(id);

  entity.payee = event.params._payee;
  entity.dividendIndex = event.params._dividendIndex;
  entity.token = event.params._token;
  entity.amount = event.params._amount;
  entity.withheld = event.params._withheld;
  entity.contractAddress = event.address;
  entity.timestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}





