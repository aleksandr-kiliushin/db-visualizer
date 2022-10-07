import { writeFile } from "fs/promises"
import { join } from "node:path"

export const writeToFile = async (contents: Record<string, unknown>) => {
  await writeFile(join(__dirname, "..", "..", "..", "dist", "db-portrait.json"), JSON.stringify(contents, null, 2))
}
