import { readFile } from "fs/promises"
import { join } from "path"

import { execute } from "../src/index"

describe("execute", () => {
  it("works", async () => {
    const dumpPath = join(__dirname, "..", "sample-files", "dump.sql")
    await execute({ dumpPath })

    const actualFileContents = await readFile(join(__dirname, "..", "dist", "db-portrait.json"), {
      encoding: "utf-8",
    })
    const expectedFileContents = await readFile(join(__dirname, "db-portrait.json"), {
      encoding: "utf-8",
    })
    expect(actualFileContents).toEqual(expectedFileContents)
  })
})
