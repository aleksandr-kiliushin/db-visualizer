import { join } from "node:path"
import { Client } from "pg"

export const queryDbData = async ({ tablesNames }: { tablesNames: string[] }) => {
  const dbVisualizerConfig = await import(join(process.cwd(), ".db-visualizer", "config.js"))

  const client = new Client({
    host: dbVisualizerConfig.DB_HOST,
    database: dbVisualizerConfig.DB_NAME,
    port: Number(dbVisualizerConfig.DB_PORT),
    password: dbVisualizerConfig.POSTGRES_PASSWORD,
    user: dbVisualizerConfig.POSTGRES_USERNAME,
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
