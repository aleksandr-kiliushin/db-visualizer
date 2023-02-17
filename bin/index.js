#! /usr/bin/env node
const path = require("node:path")

import(path.join(process.cwd(), "db-visualizer.config.js"))
  .then((dbVisualizerConfigModule) => {
    const dbVisualizerConfig = dbVisualizerConfigModule.default
    console.log(dbVisualizerConfig)
  })
  .catch(console.error)
