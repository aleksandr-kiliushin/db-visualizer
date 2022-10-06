type IRelation = [{ tableName: string; columnName: string }, { tableName: string; columnName: string }]

export interface IParseDbmlResult {
  tables: Record<string, Record<string, string>>
  relations: IRelation[]
}

export const parseDbml = (dbmlCode: string): IParseDbmlResult => {
  return {
    tables: {},
    relations: [],
  }
}

export {}
