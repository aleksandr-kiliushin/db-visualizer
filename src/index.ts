import { convertDumpContentsToDbmlCode } from "./convertDumpContentsToDbmlCode"
import { IGetDumpContentsResult, getDumpContents } from "./getDumpContents"

// const { importer } = require("@dbml/core")
// const fs = require("fs")
// const path = require("path")

// console.log("importer >>", importer)

// import { Client } from "pg"

require("dotenv").config({ path: "./local.env" })

export const execute = async ({ dumpPath }: { dumpPath: string }) => {
  const dumpsContents: IGetDumpContentsResult = getDumpContents(dumpPath)
  const dbmlCode = convertDumpContentsToDbmlCode(dumpsContents)
  return dbmlCode
  // const commands = dumpCode.split("\n\n")
  // console.log("commands.length >>", commands.length)
  // const dbmlCode = importer.import(dumpCode, "postgres")
  // console.log("dbmlCode >>", dbmlCode)
  // const pool = new Pool()
  // const response = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
  // console.log("response >>", response)
  // await pool.end()
  // const client = new Client()
  // await client.connect()
  // const response = await client.query(`
  //   SELECT * FROM information_schema.columns WHERE table_name = 'budgeting_category_type';
  // `)
  // console.log("response >>", response)
  // await client.end()
  // // you can also use async/await
  // const response = await pool.query('SELECT NOW()')
  // await pool.end()
  // // clients will also use environment variables
  // // for connection information
  // const client = new Client()
  // await client.connect()
  // const response = await client.query('SELECT NOW()')
  // await client.end()
}

export {}
