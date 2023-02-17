import { existsSync } from "node:fs"
import { mkdir, unlink, writeFile } from "node:fs/promises"
import { join } from "node:path"

export const writeToFile = async (contents: Record<string, unknown>) => {
  const distDirPath = join(__dirname, "..", "..", "..", "dist")
  if (!existsSync(distDirPath)) await mkdir(distDirPath)

  const dbPortraitPath = join(distDirPath, "db-portrait.json")
  if (existsSync(dbPortraitPath)) await unlink(dbPortraitPath)
  await writeFile(dbPortraitPath, JSON.stringify(contents, null, 2))
}
