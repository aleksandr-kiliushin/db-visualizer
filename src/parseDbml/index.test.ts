import { parseDbmlResult } from "#e2e/parseDbmlResult"

import { parseDbml } from "./index"

describe("parseDbml", () => {
  it("works", () => {
    expect(parseDbml("")).toEqual(parseDbmlResult)
  })
})
