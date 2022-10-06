import { Client } from "pg"

const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "..", "..", "local.env") })

export const queryDbData = async ({ tablesNames }: { tablesNames: string[] }) => {
  const client = new Client()
  await client.connect()
  const response = await client.query("SELECT * FROM board;")
  await client.end()

  return {
    board: response.rows,
  }
}
