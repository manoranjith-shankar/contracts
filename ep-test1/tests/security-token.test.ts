import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { ModuleAdded } from "../generated/schema"
import { ModuleAdded as ModuleAddedEvent } from "../generated/SecurityToken/SecurityToken"
import { handleModuleAdded } from "../src/security-token"
import { createModuleAddedEvent } from "./security-token-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _types = [123]
    let _name = Bytes.fromI32(1234567890)
    let _moduleFactory = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _module = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _moduleCost = BigInt.fromI32(234)
    let _budget = BigInt.fromI32(234)
    let _label = Bytes.fromI32(1234567890)
    let _archived = "boolean Not implemented"
    let newModuleAddedEvent = createModuleAddedEvent(
      _types,
      _name,
      _moduleFactory,
      _module,
      _moduleCost,
      _budget,
      _label,
      _archived
    )
    handleModuleAdded(newModuleAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ModuleAdded created and stored", () => {
    assert.entityCount("ModuleAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_types",
      "[123]"
    )
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_name",
      "1234567890"
    )
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_moduleFactory",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_module",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_moduleCost",
      "234"
    )
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_budget",
      "234"
    )
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_label",
      "1234567890"
    )
    assert.fieldEquals(
      "ModuleAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_archived",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
