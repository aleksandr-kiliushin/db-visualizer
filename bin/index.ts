#! /usr/bin/env node
import path from "node:path"

import { execute } from "#server/src/index"

execute({ dumpPath: path.join(process.cwd(), ".db-visualizer", "dump.sql") })
