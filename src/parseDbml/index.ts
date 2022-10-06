type IRelation = [{ tableName: string; columnName: string }, { tableName: string; columnName: string }]

export interface IParseDbmlResult {
  tables: Record<string, Record<string, string>>
  relations: IRelation[]
}

export const parseDbml = (dbmlCode: string): IParseDbmlResult => {
  const dbmlLiterals = dbmlCode.split("\n\n")

  const tables: IParseDbmlResult["tables"] = {}
  const relations: IParseDbmlResult["relations"] = []

  dbmlLiterals.forEach((dbmlLiteral) => {
    if (dbmlLiteral.includes('Table "')) {
      const tableTitleMatchings = dbmlLiteral.match(/(?<=^Table ")\w+/)
      if (tableTitleMatchings === null) {
        throw new Error("tableTitleMatchings is null")
      }
      const tableTitle = tableTitleMatchings[0]

      const columnsObjectMatchings = dbmlLiteral.match(/(?<={\n)(.|\n)+(?=\n})/)

      if (columnsObjectMatchings === null) {
        throw new Error("columnsObjectMatchings is null")
      }

      const columnsObjectMatch = columnsObjectMatchings[0]
      const columns = columnsObjectMatch.split("\n").map((column) => column.trim())

      tables[tableTitle] = {}

      columns.forEach((column) => {
        const columnNameMatchings = column.match(/(?<=")\w+/)
        if (columnNameMatchings === null) {
          throw new Error("columnNameMatchings is null")
        }
        const columnName = columnNameMatchings[0]
        const columnDescriptionMatching = column.match(/(?<="\w+" ).+/)
        if (columnDescriptionMatching === null) {
          throw new Error("columnDescriptionMatching is null")
        }
        const columnDescription = columnDescriptionMatching[0]
        tables[tableTitle][columnName] = columnDescription
      })
    }

    if (dbmlLiteral.includes('Ref:"')) {
      const relationsFieldsMatchings = dbmlLiteral.match(/"\w+"."\w+"/g)
      if (relationsFieldsMatchings === null) {
        throw new Error("relationsFieldsMatchings is null")
      }
      const [relationFirstTableMatching, relationSecondTableMatching] = relationsFieldsMatchings
      const [relationFirstTableName, relationFirstTableColumnName] = relationFirstTableMatching
        .split(".")
        .map((item) => item.replace(/"/g, ""))
      const [relationSecondTableName, relationSecondTableColumnName] = relationSecondTableMatching
        .split(".")
        .map((item) => item.replace(/"/g, ""))

      relations.push([
        {
          tableName: relationFirstTableName,
          columnName: relationFirstTableColumnName,
        },
        {
          tableName: relationSecondTableName,
          columnName: relationSecondTableColumnName,
        },
      ])
    }
  })

  return { tables, relations }
}
