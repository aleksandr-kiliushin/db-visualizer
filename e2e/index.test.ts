import { parseDbmlResult } from "./parseDbmlResult"

const path = require("path")

const { execute } = require("../src/index")

describe("execute", () => {
  it("works", async () => {
    expect(
      await execute({
        dumpPath: path.join(__dirname, "..", "sample-files", "dump.sql"),
      })
    ).toEqual(parseDbmlResult)
  })
})
