import { convertDumpContentsToDbmlCodeResult } from "#e2e/convertDumpContentsToDbmlCodeResult"
import { getDumpsContentsResult } from "#e2e/getDumpsContentsResult"

import { convertDumpContentsToDbmlCode } from "./index"

describe("convertDumpContentsToDbmlCode", () => {
  it("works", () => {
    expect(convertDumpContentsToDbmlCode(getDumpsContentsResult)).toEqual(convertDumpContentsToDbmlCodeResult)
  })
})
