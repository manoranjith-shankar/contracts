import { ERC20DividendDeposited as ERC20DividendDepositedSchema } from "../../generated/schema"
import { ERC20DividendDeposited } from "../../generated/templates/ERC20DividendCheckpoint/ERC20DividendCheckpoint";
import { CHANNEL_ADDRESS } from "../constant";
import { sendPushNotification } from "../helpers/pushNotification";

function notifyUsers(): void {
  const title = "Rent Generated Alerts";
  const body = `A property has generated rental income. Please visit https://www.estateprotocol.com to claim your rent.`;

  const recipient = CHANNEL_ADDRESS;
  const type = "1";
  const subject = title;
  const message = body;
  const image = "https://www.estateprotocol.com/favicon.ico";
  const secret = "null";
  const cta = "https://www.estateprotocol.com/";
  const category = "4";

  const notification = `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\", \"category\": \"${category}\"}`;
  sendPushNotification(recipient, notification);
}

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

  notifyUsers();
}





