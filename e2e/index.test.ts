import { parseDbmlResult } from "./parseDbmlResult"

const path = require("path")

const { execute } = require("../src/index")

describe("execute", () => {
  const dumpPath = path.join(__dirname, "..", "sample-files", "dump.sql")
  it("works", async () => {
    expect(await execute({ dumpPath })).toEqual({
      schema: parseDbmlResult,
    })
  })
})
