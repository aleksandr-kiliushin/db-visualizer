import { parseDump } from "./index"

describe("parseDump", () => {
  it("works", () => {
    expect(parseDump("")).toEqual([])
  })
})
