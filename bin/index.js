#! /usr/bin/env node
const { generateDbPortrait } = require("../server/src/index.ts")
const path = require("node:path")

generateDbPortrait({ dumpPath: path.join(process.cwd(), ".db-visualizer", "dump.sql") })
