// select * from board
// id |        name         | subjectId
// ----+---------------------+-----------
//   1 | clever-budgetiers   |         1
//   2 | mega-economists     |         1
//   3 | beautiful-sportsmen |         2
// (3 rows)

// select * from board_subject;
//  id |   name
// ----+-----------
//   1 | budgeting
//   2 | habits
// (2 rows)

// select * from budgeting_category;
//  id |   name    | typeId | boardId
// ----+-----------+--------+---------
//   1 | clothes   |      1 |       1
//   2 | education |      1 |       1
//   3 | gifts     |      1 |       2
//   4 | gifts     |      2 |       2
//   5 | salary    |      2 |       2
// (5 rows)

// select * from budgeting_category_type;
//  id |  name
// ----+---------
//   1 | expense
//   2 | income
// (2 rows)

// select * from budgeting_record;
//  amount |    date    | id | isTrashed | categoryId
// --------+------------+----+-----------+------------
//     100 | 2022-08-01 |  1 | t         |          1
//     400 | 2022-08-01 |  2 | t         |          2
//      25 | 2022-08-01 |  3 | f         |          2
//      30 | 2022-08-02 |  4 | f         |          3
//      10 | 2022-08-02 |  5 | f         |          3
//     230 | 2022-08-03 |  6 | f         |          4
// (6 rows)

// select * from "user";
//  id |   username    |                   password
// ----+---------------+----------------------------------------------
//   1 | john-doe      | 8bd309ffba83c3db9a53142b052468007b
//   2 | jessica-stark | 8bd912e2fe84cd93c457142a1d7e77136c3bc954f183
// (2 rows)

// select * from "user_administrated_boards_board";
//  userId | boardId
// --------+---------
//       1 |       1
//       2 |       2
//       2 |       3
// (3 rows)

// select * from "user_boards_board";
//  userId | boardId
// --------+---------
//       1 |       1
//       2 |       1
//       2 |       2
//       2 |       3
// (4 rows)
