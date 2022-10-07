import { convertDumpContentsToDbmlCode } from "./convertDumpContentsToDbmlCode"
import { IGetDumpContentsResult, getDumpContents } from "./getDumpContents"
import { parseDbml } from "./parseDbml"
import { queryDbData } from "./queryDbData"
import { writeToFile } from "./writeToFile"

export const execute = async ({ dumpPath }: { dumpPath: string }) => {
  const dumpsContents: IGetDumpContentsResult = getDumpContents(dumpPath)
  const dbmlCode = convertDumpContentsToDbmlCode(dumpsContents)
  const parsedDbmlCode = parseDbml(dbmlCode)
  const tablesNames = Object.keys(parsedDbmlCode.tables)
  const dbData = await queryDbData({ tablesNames })
  await writeToFile({ schema: parsedDbmlCode, data: dbData })
}
