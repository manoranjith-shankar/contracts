import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ERC20DividendDeposited,
  ERC20DividendClaimed,
  ERC20DividendReclaimed,
  ERC20DividendWithholdingWithdrawn,
  SetDefaultExcludedAddresses,
  SetWithholding,
  SetWithholdingFixed,
  SetWallet,
  UpdateDividendDates,
  Pause,
  Unpause
} from "../generated/ERC20DividendCheckpoint/ERC20DividendCheckpoint"

export function createERC20DividendDepositedEvent(
  _depositor: Address,
  _checkpointId: BigInt,
  _maturity: BigInt,
  _expiry: BigInt,
  _token: Address,
  _amount: BigInt,
  _totalSupply: BigInt,
  _dividendIndex: BigInt,
  _name: Bytes
): ERC20DividendDeposited {
  let erc20DividendDepositedEvent =
    changetype<ERC20DividendDeposited>(newMockEvent())

  erc20DividendDepositedEvent.parameters = new Array()

  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_depositor",
      ethereum.Value.fromAddress(_depositor)
    )
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_checkpointId",
      ethereum.Value.fromUnsignedBigInt(_checkpointId)
    )
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_maturity",
      ethereum.Value.fromUnsignedBigInt(_maturity)
    )
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_expiry",
      ethereum.Value.fromUnsignedBigInt(_expiry)
    )
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_totalSupply",
      ethereum.Value.fromUnsignedBigInt(_totalSupply)
    )
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_dividendIndex",
      ethereum.Value.fromUnsignedBigInt(_dividendIndex)
    )
  )
  erc20DividendDepositedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )

  return erc20DividendDepositedEvent
}

export function createERC20DividendClaimedEvent(
  _payee: Address,
  _dividendIndex: BigInt,
  _token: Address,
  _amount: BigInt,
  _withheld: BigInt
): ERC20DividendClaimed {
  let erc20DividendClaimedEvent =
    changetype<ERC20DividendClaimed>(newMockEvent())

  erc20DividendClaimedEvent.parameters = new Array()

  erc20DividendClaimedEvent.parameters.push(
    new ethereum.EventParam("_payee", ethereum.Value.fromAddress(_payee))
  )
  erc20DividendClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_dividendIndex",
      ethereum.Value.fromUnsignedBigInt(_dividendIndex)
    )
  )
  erc20DividendClaimedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  erc20DividendClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  erc20DividendClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_withheld",
      ethereum.Value.fromUnsignedBigInt(_withheld)
    )
  )

  return erc20DividendClaimedEvent
}

export function createERC20DividendReclaimedEvent(
  _claimer: Address,
  _dividendIndex: BigInt,
  _token: Address,
  _claimedAmount: BigInt
): ERC20DividendReclaimed {
  let erc20DividendReclaimedEvent =
    changetype<ERC20DividendReclaimed>(newMockEvent())

  erc20DividendReclaimedEvent.parameters = new Array()

  erc20DividendReclaimedEvent.parameters.push(
    new ethereum.EventParam("_claimer", ethereum.Value.fromAddress(_claimer))
  )
  erc20DividendReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_dividendIndex",
      ethereum.Value.fromUnsignedBigInt(_dividendIndex)
    )
  )
  erc20DividendReclaimedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  erc20DividendReclaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_claimedAmount",
      ethereum.Value.fromUnsignedBigInt(_claimedAmount)
    )
  )

  return erc20DividendReclaimedEvent
}

export function createERC20DividendWithholdingWithdrawnEvent(
  _claimer: Address,
  _dividendIndex: BigInt,
  _token: Address,
  _withheldAmount: BigInt
): ERC20DividendWithholdingWithdrawn {
  let erc20DividendWithholdingWithdrawnEvent =
    changetype<ERC20DividendWithholdingWithdrawn>(newMockEvent())

  erc20DividendWithholdingWithdrawnEvent.parameters = new Array()

  erc20DividendWithholdingWithdrawnEvent.parameters.push(
    new ethereum.EventParam("_claimer", ethereum.Value.fromAddress(_claimer))
  )
  erc20DividendWithholdingWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_dividendIndex",
      ethereum.Value.fromUnsignedBigInt(_dividendIndex)
    )
  )
  erc20DividendWithholdingWithdrawnEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  erc20DividendWithholdingWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_withheldAmount",
      ethereum.Value.fromUnsignedBigInt(_withheldAmount)
    )
  )

  return erc20DividendWithholdingWithdrawnEvent
}

export function createSetDefaultExcludedAddressesEvent(
  _excluded: Array<Address>
): SetDefaultExcludedAddresses {
  let setDefaultExcludedAddressesEvent =
    changetype<SetDefaultExcludedAddresses>(newMockEvent())

  setDefaultExcludedAddressesEvent.parameters = new Array()

  setDefaultExcludedAddressesEvent.parameters.push(
    new ethereum.EventParam(
      "_excluded",
      ethereum.Value.fromAddressArray(_excluded)
    )
  )

  return setDefaultExcludedAddressesEvent
}

export function createSetWithholdingEvent(
  _investors: Array<Address>,
  _withholding: Array<BigInt>
): SetWithholding {
  let setWithholdingEvent = changetype<SetWithholding>(newMockEvent())

  setWithholdingEvent.parameters = new Array()

  setWithholdingEvent.parameters.push(
    new ethereum.EventParam(
      "_investors",
      ethereum.Value.fromAddressArray(_investors)
    )
  )
  setWithholdingEvent.parameters.push(
    new ethereum.EventParam(
      "_withholding",
      ethereum.Value.fromUnsignedBigIntArray(_withholding)
    )
  )

  return setWithholdingEvent
}

export function createSetWithholdingFixedEvent(
  _investors: Array<Address>,
  _withholding: BigInt
): SetWithholdingFixed {
  let setWithholdingFixedEvent = changetype<SetWithholdingFixed>(newMockEvent())

  setWithholdingFixedEvent.parameters = new Array()

  setWithholdingFixedEvent.parameters.push(
    new ethereum.EventParam(
      "_investors",
      ethereum.Value.fromAddressArray(_investors)
    )
  )
  setWithholdingFixedEvent.parameters.push(
    new ethereum.EventParam(
      "_withholding",
      ethereum.Value.fromUnsignedBigInt(_withholding)
    )
  )

  return setWithholdingFixedEvent
}

export function createSetWalletEvent(
  _oldWallet: Address,
  _newWallet: Address
): SetWallet {
  let setWalletEvent = changetype<SetWallet>(newMockEvent())

  setWalletEvent.parameters = new Array()

  setWalletEvent.parameters.push(
    new ethereum.EventParam(
      "_oldWallet",
      ethereum.Value.fromAddress(_oldWallet)
    )
  )
  setWalletEvent.parameters.push(
    new ethereum.EventParam(
      "_newWallet",
      ethereum.Value.fromAddress(_newWallet)
    )
  )

  return setWalletEvent
}

export function createUpdateDividendDatesEvent(
  _dividendIndex: BigInt,
  _maturity: BigInt,
  _expiry: BigInt
): UpdateDividendDates {
  let updateDividendDatesEvent = changetype<UpdateDividendDates>(newMockEvent())

  updateDividendDatesEvent.parameters = new Array()

  updateDividendDatesEvent.parameters.push(
    new ethereum.EventParam(
      "_dividendIndex",
      ethereum.Value.fromUnsignedBigInt(_dividendIndex)
    )
  )
  updateDividendDatesEvent.parameters.push(
    new ethereum.EventParam(
      "_maturity",
      ethereum.Value.fromUnsignedBigInt(_maturity)
    )
  )
  updateDividendDatesEvent.parameters.push(
    new ethereum.EventParam(
      "_expiry",
      ethereum.Value.fromUnsignedBigInt(_expiry)
    )
  )

  return updateDividendDatesEvent
}

export function createPauseEvent(account: Address): Pause {
  let pauseEvent = changetype<Pause>(newMockEvent())

  pauseEvent.parameters = new Array()

  pauseEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pauseEvent
}

export function createUnpauseEvent(account: Address): Unpause {
  let unpauseEvent = changetype<Unpause>(newMockEvent())

  unpauseEvent.parameters = new Array()

  unpauseEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpauseEvent
}
