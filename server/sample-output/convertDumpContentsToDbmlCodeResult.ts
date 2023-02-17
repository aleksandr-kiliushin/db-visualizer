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

Ref "FK_269bc39bfebdea7414b389b6c65":"board"."id" < "budgeting_category"."boardId" [delete: cascade]

Ref "FK_83146940d4e22ed4b9e82d94435":"user"."id" < "user_administrated_boards_board"."userId" [update: cascade, delete: cascade]

Ref "FK_974b4481b02a5abab70d29c01bd":"budgeting_category_type"."id" < "budgeting_category"."typeId"

Ref "FK_a1e78b2ee3d6f5b91b4878bbc80":"board"."id" < "user_administrated_boards_board"."boardId" [delete: cascade]

Ref "FK_c3883bef3207497274cacae9ccc":"board_subject"."id" < "board"."subjectId"

Ref "FK_d92c98138733350c58be167b78c":"user"."id" < "user_boards_board"."userId" [update: cascade, delete: cascade]

Ref "FK_ec241c244980d39996b501f3970":"board"."id" < "user_boards_board"."boardId" [delete: cascade]

Ref "FK_f013431c4ebbfccbb8976107236":"budgeting_category"."id" < "budgeting_record"."categoryId" [delete: cascade]
`
