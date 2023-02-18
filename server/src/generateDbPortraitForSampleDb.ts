import { join } from "node:path"

import { generateDbPortrait } from "./index"

generateDbPortrait({ dumpPath: join(__dirname, "..", "..", ".db-visualizer", "dump.sql") })
