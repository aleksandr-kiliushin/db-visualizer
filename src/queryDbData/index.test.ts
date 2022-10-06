import { parseDbmlResult } from "#e2e/parseDbmlResult"
import { queryDbDataResult } from "#e2e/queryDbDataResult"

import { queryDbData } from "./index"

describe("queryDbData", () => {
  it("works", async () => {
    const tablesNames = Object.keys(parseDbmlResult.tables)
    const result = await queryDbData({ tablesNames })
    expect(result).toEqual(queryDbDataResult)
  })
})
