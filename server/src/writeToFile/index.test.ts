import { readFile } from "fs/promises"
import { join } from "node:path"

import { parseDbmlResult } from "#server/sample-output/parseDbmlResult"
import { queryDbDataResult } from "#server/sample-output/queryDbDataResult"

import { writeToFile } from "./index"

describe("writeToFile", () => {
  it("works", async () => {
    await writeToFile({ schema: parseDbmlResult, data: queryDbDataResult })
    const actualFileContents = await readFile(join(__dirname, "..", "..", "..", "dist", "db-portrait.json"), {
      encoding: "utf-8",
    })
    const expectedFileContents = await readFile(join(__dirname, "..", "..", "sample-output", "db-portrait.json"), {
      encoding: "utf-8",
    })
    expect(actualFileContents).toEqual(expectedFileContents)
  })
})
