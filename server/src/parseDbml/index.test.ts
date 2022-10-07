import { convertDumpContentsToDbmlCodeResult } from "#server/sample-output/convertDumpContentsToDbmlCodeResult"
import { parseDbmlResult } from "#server/sample-output/parseDbmlResult"

import { parseDbml } from "./index"

describe("parseDbml", () => {
  it("works", () => {
    expect(parseDbml(convertDumpContentsToDbmlCodeResult)).toEqual(parseDbmlResult)
  })
})
