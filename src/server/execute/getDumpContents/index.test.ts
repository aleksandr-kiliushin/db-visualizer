import { join } from "node:path"

import { getDumpContentsResult } from "#server/sample-output/getDumpContentsResult"

import { getDumpContents } from "./index"

describe("getDumpContents", () => {
  it("works", async () => {
    const actualDumpContents = await getDumpContents(join(__dirname, "..", "..", "sample-input", "dump.sql"))
    expect(actualDumpContents).toEqual(getDumpContentsResult)
  })
})
