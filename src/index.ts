import { Client } from "pg"

require("dotenv").config({ path: "./local.env" })

const bootstrap = async () => {
  console.log("process.env.PORT >>", process.env.PORT)
  const client = new Client()
  await client.connect()
  const res = await client.query("SELECT $1::text as message", ["Hello world!"])
  console.log(res.rows[0].message) // Hello world!
  await client.end()
}

bootstrap()
