import { Client } from "pg"

const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "..", "..", "local.env") })

export const queryDbData = async ({ tablesNames }: { tablesNames: string[] }) => {
  const client = new Client()
  await client.connect()
  const rowsWithTableNames = await Promise.all(
    tablesNames.map(async (tableName) => ({
      tableName,
      tableRows: (await client.query(`SELECT * FROM "${tableName}";`)).rows,
    }))
  )
  await client.end()

  const result: Record<string, unknown> = {}
  rowsWithTableNames.forEach(({ tableName, tableRows }) => {
    result[tableName] = tableRows
  })

  return result
}
