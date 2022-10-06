import { getDumpsContentsResult } from "#e2e/getDumpsContentsResult"

import { getDumpContents } from "./index"

const path = require("path")

describe("getDumpContents", () => {
  it("works", () => {
    expect(getDumpContents(path.join(__dirname, "..", "..", "sample-files", "dump.sql"))).toEqual(
      getDumpsContentsResult
    )
  })
})
