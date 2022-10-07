export const convertDumpContentsToDbmlCodeResult = `Table "board" {
  "id" integer [not null]
  "name" "character varying" [not null]
  "subjectId" integer
}

Table "board_subject" {
  "id" integer [not null]
  "name" "character varying" [not null]
}

Table "budgeting_category" {
  "id" integer [not null]
  "name" "character varying" [not null]
  "typeId" integer
  "boardId" integer
}

Table "budgeting_category_type" {
  "id" integer [not null]
  "name" "character varying" [not null]
}

Table "budgeting_record" {
  "amount" integer [not null]
  "date" "character varying" [not null]
  "id" integer [not null]
  "isTrashed" boolean [not null, default: false]
  "categoryId" integer
}

Table "user" {
  "id" integer [not null]
  "username" "character varying" [not null]
  "password" "character varying" [not null]
}

Table "user_administrated_boards_board" {
  "userId" integer [not null]
  "boardId" integer [not null]
}

Table "user_boards_board" {
  "userId" integer [not null]
  "boardId" integer [not null]
}

Ref:"board"."id" < "budgeting_category"."boardId" [delete: cascade]

Ref:"user"."id" < "user_administrated_boards_board"."userId" [update: cascade, delete: cascade]

Ref:"budgeting_category_type"."id" < "budgeting_category"."typeId"

Ref:"board"."id" < "user_administrated_boards_board"."boardId" [delete: cascade]

Ref:"board_subject"."id" < "board"."subjectId"

Ref:"user"."id" < "user_boards_board"."userId" [update: cascade, delete: cascade]

Ref:"board"."id" < "user_boards_board"."boardId" [delete: cascade]

Ref:"budgeting_category"."id" < "budgeting_record"."categoryId" [delete: cascade]
`
