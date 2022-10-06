import { convertDumpContentsToDbmlCodeResult } from "#e2e/convertDumpContentsToDbmlCodeResult"
import { parseDbmlResult } from "#e2e/parseDbmlResult"

import { parseDbml } from "./index"

describe("parseDbml", () => {
  it("works", () => {
    expect(parseDbml(convertDumpContentsToDbmlCodeResult)).toEqual(parseDbmlResult)
  })
})
