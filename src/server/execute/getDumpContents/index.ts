import { readFile } from "node:fs/promises"

export interface IGetDumpContentsResult {
  createTablesCommands: string[]
  setRelationsCommands: string[]
}

export const getDumpContents = async (dampPath: string): Promise<IGetDumpContentsResult> => {
  const dumpCode = await readFile(dampPath, { encoding: "utf-8" })
  const commands = dumpCode.split("\n\n")
  const createTablesCommands = commands.filter((command) => {
    return command.startsWith("CREATE TABLE") && !command.includes("migrations")
  })
  const setRelationsCommands = commands.filter((command) => {
    return command.startsWith("ALTER TABLE") && command.includes("ADD CONSTRAINT") && command.includes("REFERENCES")
  })

  return { createTablesCommands, setRelationsCommands }
}
