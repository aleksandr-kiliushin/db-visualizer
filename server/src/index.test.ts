import { readFile } from "fs/promises"
import { join } from "node:path"

import { execute } from "./index"

describe("execute", () => {
  it("works", async () => {
    const dumpPath = join(__dirname, "..", "sample-input", "dump.sql")
    await execute({ dumpPath })

    const actualFileContents = await readFile(join(__dirname, "..", "..", "dist", "db-portrait.json"), {
      encoding: "utf-8",
    })
    const expectedFileContents = await readFile(join(__dirname, "..", "sample-output", "db-portrait.json"), {
      encoding: "utf-8",
    })
    expect(actualFileContents).toEqual(expectedFileContents)
  })
})
