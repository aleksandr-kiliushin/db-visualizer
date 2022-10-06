import { IParseDumpResult } from "./index"

const { parseDumpContents } = require("./index")
const path = require("path")

describe("parseDumpContents", () => {
  it("works", () => {
    expect(parseDumpContents(path.join(__dirname, "..", "..", "sample-files", "dump.sql"))).toEqual<IParseDumpResult>({
      createTablesCommands: [
        `CREATE TABLE public.board (
    id integer NOT NULL,
    name character varying NOT NULL,
    "subjectId" integer
);`,
        `CREATE TABLE public.board_subject (
    id integer NOT NULL,
    name character varying NOT NULL
);`,
        `CREATE TABLE public.budgeting_category (
    id integer NOT NULL,
    name character varying NOT NULL,
    "typeId" integer,
    "boardId" integer
);`,
        `CREATE TABLE public.budgeting_category_type (
    id integer NOT NULL,
    name character varying NOT NULL
);`,
        `CREATE TABLE public.budgeting_record (
    amount integer NOT NULL,
    date character varying NOT NULL,
    id integer NOT NULL,
    "isTrashed" boolean DEFAULT false NOT NULL,
    "categoryId" integer
);`,
        `CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL
);`,
        `CREATE TABLE public.user_administrated_boards_board (
    "userId" integer NOT NULL,
    "boardId" integer NOT NULL
);`,
        `CREATE TABLE public.user_boards_board (
    "userId" integer NOT NULL,
    "boardId" integer NOT NULL
);`,
      ],
      setRelationsCommands: [
        `ALTER TABLE ONLY public.budgeting_category
    ADD CONSTRAINT "FK_269bc39bfebdea7414b389b6c65" FOREIGN KEY ("boardId") REFERENCES public.board(id) ON DELETE CASCADE;`,
        `ALTER TABLE ONLY public.user_administrated_boards_board
    ADD CONSTRAINT "FK_83146940d4e22ed4b9e82d94435" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;`,
        `ALTER TABLE ONLY public.budgeting_category
    ADD CONSTRAINT "FK_974b4481b02a5abab70d29c01bd" FOREIGN KEY ("typeId") REFERENCES public.budgeting_category_type(id);`,
        `ALTER TABLE ONLY public.user_administrated_boards_board
    ADD CONSTRAINT "FK_a1e78b2ee3d6f5b91b4878bbc80" FOREIGN KEY ("boardId") REFERENCES public.board(id) ON DELETE CASCADE;`,
        `ALTER TABLE ONLY public.board
    ADD CONSTRAINT "FK_c3883bef3207497274cacae9ccc" FOREIGN KEY ("subjectId") REFERENCES public.board_subject(id);`,
        `ALTER TABLE ONLY public.user_boards_board
    ADD CONSTRAINT "FK_d92c98138733350c58be167b78c" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;`,
        `ALTER TABLE ONLY public.user_boards_board
    ADD CONSTRAINT "FK_ec241c244980d39996b501f3970" FOREIGN KEY ("boardId") REFERENCES public.board(id) ON DELETE CASCADE;`,
        `ALTER TABLE ONLY public.budgeting_record
    ADD CONSTRAINT "FK_f013431c4ebbfccbb8976107236" FOREIGN KEY ("categoryId") REFERENCES public.budgeting_category(id) ON DELETE CASCADE;`,
      ],
    })
  })
})

// Table "board" {
//   "id" integer [not null]
//   "name" "character varying" [not null]
//   "subjectId" integer
// }

// Table "board_subject" {
//   "id" integer [not null]
//   "name" "character varying" [not null]
// }

// Table "budgeting_category" {
//   "id" integer [not null]
//   "name" "character varying" [not null]
//   "typeId" integer
//   "boardId" integer
// }

// Table "budgeting_category_type" {
//   "id" integer [not null]
//   "name" "character varying" [not null]
// }

// Table "budgeting_record" {
//   "amount" integer [not null]
//   "date" "character varying" [not null]
//   "id" integer [not null]
//   "isTrashed" boolean [not null, default: false]
//   "categoryId" integer
// }

// Table "migrations" {
//   "id" integer [not null]
//   "timestamp" bigint [not null]
//   "name" "character varying" [not null]
// }

// Table "user" {
//   "id" integer [not null]
//   "username" "character varying" [not null]
//   "password" "character varying" [not null]
// }

// Table "user_administrated_boards_board" {
//   "userId" integer [not null]
//   "boardId" integer [not null]
// }

// Table "user_boards_board" {
//   "userId" integer [not null]
//   "boardId" integer [not null]
// }

// Ref:"board"."id" < "budgeting_category"."boardId" [delete: cascade]

// Ref:"user"."id" < "user_administrated_boards_board"."userId" [update: cascade, delete: cascade]

// Ref:"budgeting_category_type"."id" < "budgeting_category"."typeId"

// Ref:"board"."id" < "user_administrated_boards_board"."boardId" [delete: cascade]

// Ref:"board_subject"."id" < "board"."subjectId"

// Ref:"user"."id" < "user_boards_board"."userId" [update: cascade, delete: cascade]

// Ref:"board"."id" < "user_boards_board"."boardId" [delete: cascade]

// Ref:"budgeting_category"."id" < "budgeting_record"."categoryId" [delete: cascade]
