type IRelation = [{ tableName: string; columnName: string }, { tableName: string; columnName: string }]

export interface IParseDbmlResult {
  tables: Record<string, Record<string, string>>
  relations: IRelation[]
}

export const parseDbml = (dbmlCode: string): IParseDbmlResult => {
  const [firstTableDbmlCode] = dbmlCode.split("\n\n")
  const boardTitleMatchings = firstTableDbmlCode.match(/(?<=^Table ")\w+/)

  if (boardTitleMatchings === null) {
    throw new Error("table name matchings is null")
  }

  const columnsObjectMatchings = firstTableDbmlCode.match(/(?<={\n)(.|\n)+(?=\n})/)

  if (columnsObjectMatchings === null) {
    throw new Error("column object matchings is null")
  }

  const columnsObjectMatch = columnsObjectMatchings[0]
  const columns = columnsObjectMatch.split("\n").map((column) => column.trim())

  const boardTableColumns: Record<string, string> = {}

  columns.forEach((column) => {
    const columnNameMatchings = column.match(/(?<=")\w+/)
    if (columnNameMatchings === null) {
      throw new Error("columnNameMatchings is null")
    }
    const columnDescriptionMatching = column.match(/(?<="\w+" ).+/)
    if (columnDescriptionMatching === null) {
      throw new Error("columnDescriptionMatching is null")
    }
    boardTableColumns[columnNameMatchings[0]] = columnDescriptionMatching[0]
  })

  return {
    tables: {
      [boardTitleMatchings[0]]: boardTableColumns,
    },
    relations: [],
  }
}

export {}
