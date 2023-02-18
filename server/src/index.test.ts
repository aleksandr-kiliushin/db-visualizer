import { readFile } from "fs/promises"
import { join } from "node:path"

import { generateDbPortrait } from "./index"

describe("generateDbPortrait", () => {
  it("works", async () => {
    const dumpPath = join(__dirname, "..", "sample-input", "dump.sql")
    await generateDbPortrait({ dumpPath })

    const actualFileContents = await readFile(join(__dirname, "..", "..", "dist", "db-portrait.json"), {
      encoding: "utf-8",
    })
    const expectedFileContents = await readFile(join(__dirname, "..", "sample-output", "db-portrait.json"), {
      encoding: "utf-8",
    })
    expect(actualFileContents).toEqual(expectedFileContents)
  })
})
