import { queryDbDataResult } from "#e2e/queryDbDataResult"

import { queryDbData } from "./index"

describe("queryDbData", () => {
  it("works", async () => {
    expect(await queryDbData()).toEqual(queryDbDataResult)
  })
})
