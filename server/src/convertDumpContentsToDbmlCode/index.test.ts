import { convertDumpContentsToDbmlCodeResult } from "#server/sample-output/convertDumpContentsToDbmlCodeResult"
import { getDumpContentsResult } from "#server/sample-output/getDumpContentsResult"

import { convertDumpContentsToDbmlCode } from "./index"

describe("convertDumpContentsToDbmlCode", () => {
  it("works", () => {
    expect(convertDumpContentsToDbmlCode(getDumpContentsResult)).toEqual(convertDumpContentsToDbmlCodeResult)
  })
})
