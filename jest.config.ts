import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  moduleNameMapper: {
    "^#client(.*)$": "<rootDir>/src/client$1",
    "^#server(.*)$": "<rootDir>/src/server$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist", "<rootDir>/node_modules"],
  preset: "ts-jest",
  testEnvironment: "node",
}

module.exports = config
