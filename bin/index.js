#! /usr/bin/env node
const path = require("node:path")
const { generateDbPortrait } = require("../server/src/index.ts")

generateDbPortrait({ dumpPath: path.join(process.cwd(), ".db-visualizer", "dump.sql") })
