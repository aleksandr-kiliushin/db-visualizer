import { readFile } from "fs/promises"
import { join } from "path"

import { parseDbmlResult } from "#e2e/parseDbmlResult"
import { queryDbDataResult } from "#e2e/queryDbDataResult"

import { writeToFile } from "./index"

describe("writeToFile", () => {
  it("works", async () => {
    await writeToFile({ schema: parseDbmlResult, data: queryDbDataResult })
    const actualFileContents = await readFile(join(__dirname, "..", "..", "dist", "db-portrait.json"), {
      encoding: "utf-8",
    })
    const expectedFileContents = await readFile(join(__dirname, "..", "..", "e2e", "db-portrait.json"), {
      encoding: "utf-8",
    })
    expect(actualFileContents).toEqual(expectedFileContents)
  })
})
