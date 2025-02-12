import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { ERC20DividendDeposited } from "../generated/schema"
import { ERC20DividendDeposited as ERC20DividendDepositedEvent } from "../generated/ERC20DividendCheckpoint/ERC20DividendCheckpoint"
import { handleERC20DividendDeposited } from "../src/erc-20-dividend-checkpoint"
import { createERC20DividendDepositedEvent } from "./erc-20-dividend-checkpoint-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _depositor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _checkpointId = BigInt.fromI32(234)
    let _maturity = BigInt.fromI32(234)
    let _expiry = BigInt.fromI32(234)
    let _token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _amount = BigInt.fromI32(234)
    let _totalSupply = BigInt.fromI32(234)
    let _dividendIndex = BigInt.fromI32(234)
    let _name = Bytes.fromI32(1234567890)
    let newERC20DividendDepositedEvent = createERC20DividendDepositedEvent(
      _depositor,
      _checkpointId,
      _maturity,
      _expiry,
      _token,
      _amount,
      _totalSupply,
      _dividendIndex,
      _name
    )
    handleERC20DividendDeposited(newERC20DividendDepositedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ERC20DividendDeposited created and stored", () => {
    assert.entityCount("ERC20DividendDeposited", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_depositor",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_checkpointId",
      "234"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_maturity",
      "234"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_expiry",
      "234"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_amount",
      "234"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_totalSupply",
      "234"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_dividendIndex",
      "234"
    )
    assert.fieldEquals(
      "ERC20DividendDeposited",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_name",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
