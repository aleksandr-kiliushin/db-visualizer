#! /usr/bin/env node
const { execute } = require("../server/src/index.ts")
const path = require("node:path")

execute({ dumpPath: path.join(process.cwd(), ".db-visualizer", "dump.sql") })
