import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { LogicContractSet } from "../generated/schema"
import { LogicContractSet as LogicContractSetEvent } from "../generated/STFactory/STFactory"
import { handleLogicContractSet } from "../src/st-factory"
import { createLogicContractSetEvent } from "./st-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _version = "Example string value"
    let _upgrade = BigInt.fromI32(234)
    let _logicContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _initializationData = Bytes.fromI32(1234567890)
    let _upgradeData = Bytes.fromI32(1234567890)
    let newLogicContractSetEvent = createLogicContractSetEvent(
      _version,
      _upgrade,
      _logicContract,
      _initializationData,
      _upgradeData
    )
    handleLogicContractSet(newLogicContractSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LogicContractSet created and stored", () => {
    assert.entityCount("LogicContractSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LogicContractSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_version",
      "Example string value"
    )
    assert.fieldEquals(
      "LogicContractSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_upgrade",
      "234"
    )
    assert.fieldEquals(
      "LogicContractSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_logicContract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LogicContractSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_initializationData",
      "1234567890"
    )
    assert.fieldEquals(
      "LogicContractSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_upgradeData",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
