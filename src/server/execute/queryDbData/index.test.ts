import { parseDbmlResult } from "#server/sample-output/parseDbmlResult"
import { queryDbDataResult } from "#server/sample-output/queryDbDataResult"

import { queryDbData } from "./index"

describe("queryDbData", () => {
  it("works", async () => {
    const tablesNames = Object.keys(parseDbmlResult.tables)
    const result = await queryDbData({ tablesNames })
    expect(result).toEqual(queryDbDataResult)
  })
})
