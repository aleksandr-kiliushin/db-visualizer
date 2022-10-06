import { IParseDbmlResult } from "src/parseDbml"

export const parseDbmlResult: IParseDbmlResult = {
  tables: {
    board: {
      id: "integer [not null]",
      name: '"character varying" [not null]',
      subjectId: "integer",
    },
    board_subject: {
      id: "integer [not null]",
      name: '"character varying" [not null]',
    },
    budgeting_category: {
      id: "integer [not null]",
      name: '"character varying" [not null]',
      typeId: "integer",
      boardId: "integer",
    },
    budgeting_category_type: {
      id: "integer [not null]",
      name: '"character varying" [not null]',
    },
    budgeting_record: {
      amount: "integer [not null]",
      date: '"character varying" [not null]',
      id: "integer [not null]",
      isTrashed: "boolean [not null, default: false]",
      categoryId: "integer",
    },
    user: {
      id: "integer [not null]",
      username: '"character varying" [not null]',
      password: '"character varying" [not null]',
    },
    user_administrated_boards_board: {
      userId: "integer [not null]",
      boardId: "integer [not null]",
    },
    user_boards_board: {
      userId: "integer [not null]",
      boardId: "integer [not null]",
    },
  },
  relations: [
    [
      { tableName: "board", columnName: "id" },
      { tableName: "budgeting_category", columnName: "boardId" },
    ],
    [
      { tableName: "user", columnName: "id" },
      { tableName: "user_administrated_boards_board", columnName: "userId" },
    ],
    [
      { tableName: "budgeting_category_type", columnName: "id" },
      { tableName: "budgeting_category", columnName: "typeId" },
    ],
    [
      { tableName: "board", columnName: "id" },
      { tableName: "user_administrated_boards_board", columnName: "boardId" },
    ],
    [
      { tableName: "board_subject", columnName: "id" },
      { tableName: "board", columnName: "subjectId" },
    ],
    [
      { tableName: "user", columnName: "id" },
      { tableName: "user_boards_board", columnName: "userId" },
    ],
    [
      { tableName: "board", columnName: "id" },
      { tableName: "user_boards_board", columnName: "boardId" },
    ],
    [
      { tableName: "budgeting_category", columnName: "id" },
      { tableName: "budgeting_record", columnName: "categoryId" },
    ],
  ],
}
