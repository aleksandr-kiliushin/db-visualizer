const fs = require("fs")

export interface IGetDumpContentsResult {
  createTablesCommands: string[]
  setRelationsCommands: string[]
}

export const getDumpContents = (dampPath: string): IGetDumpContentsResult => {
  const dumpCode: string = fs.readFileSync(dampPath, "utf-8")
  const commands = dumpCode.split("\n\n")
  const createTablesCommands = commands.filter((command) => {
    return command.startsWith("CREATE TABLE") && !command.includes("migrations")
  })
  const setRelationsCommands = commands.filter((command) => {
    return command.startsWith("ALTER TABLE") && command.includes("ADD CONSTRAINT") && command.includes("REFERENCES")
  })

  return { createTablesCommands, setRelationsCommands }
}

export {}