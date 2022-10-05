import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  moduleNameMapper: {
    "^#e2e(.*)$": "<rootDir>/e2e$1",
    "^#interfaces(.*)$": "<rootDir>/src/interfaces$1",
    "^#models(.*)$": "<rootDir>/src/models$1",
    "^#utils(.*)$": "<rootDir>/src/utils$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist", "<rootDir>/node_modules"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "node",
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "tsconfig.eslint.json",
  //   },
  // },
}

module.exports = config
