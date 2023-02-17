import { join } from "node:path"
import { Client } from "pg"

require("dotenv").config({ path: join(__dirname, "..", "..", "..", ".env") })

export const queryDbData = async ({ tablesNames }: { tablesNames: string[] }) => {
  const client = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT === undefined ? 5432 : parseInt(process.env.DB_PORT),
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USERNAME,
  })
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
