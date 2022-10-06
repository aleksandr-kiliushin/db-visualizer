import { execute } from "../src/index"
import { parseDbmlResult } from "./parseDbmlResult"

const path = require("path")

describe("execute", () => {
  const dumpPath = path.join(__dirname, "..", "sample-files", "dump.sql")
  it("works", async () => {
    expect(await execute({ dumpPath })).toEqual({
      schema: parseDbmlResult,
    })
  })
})
