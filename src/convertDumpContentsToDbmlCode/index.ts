import { importer } from "@dbml/core"
import { IGetDumpContentsResult } from "src/getDumpContents"

export const convertDumpContentsToDbmlCode = (dumpsContents: IGetDumpContentsResult): string => {
  const createTablesCommandsConcatenated = dumpsContents.createTablesCommands.join("\n\n")
  const setRelationsCommandsConcatenated = dumpsContents.setRelationsCommands.join("\n\n")
  const commdandsConcatenated = createTablesCommandsConcatenated + "\n\n" + setRelationsCommandsConcatenated

  return importer.import(commdandsConcatenated, "postgres")
}
