#! /usr/bin/env node
const path = require("node:path")
const { readFileSync } = require("node:fs")

const dump = readFileSync(path.join(process.cwd(), ".db-visualizer", "dump.sql")).toString()
console.log("dump >>", dump)

import(path.join(process.cwd(), ".db-visualizer", "config.js"))
  .then((dbVisualizerConfigModule) => {
    const dbVisualizerConfig = dbVisualizerConfigModule.default
    console.log("dbVisualizerConfig >>", dbVisualizerConfig)
  })
  .catch(console.error)
