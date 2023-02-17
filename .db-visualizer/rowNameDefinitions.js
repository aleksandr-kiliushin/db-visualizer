export const rowNameDefinitions = {
  activity_category: (row) => `ACTIVITY CATEG: ${row.name}`,
  activity_category_measurement_type: (row) => `ACTIVITY CATEG MEASUR TYPE: ${row.name}`,
  activity_record: (row) => `ACTIVITY RECORD: #${row.id}`,
  board: (row) => `BOARD: ${row.name}`,
  board_subject: (row) => `BOARD SUBJECT: ${row.name}`,
  budgeting_category: (row) => `BUDG CATEG.: ${row.name}`,
  budgeting_category_type: (row) => `BUDG CATEG TYPE: ${row.name}`,
  budgeting_record: (row) => `BUDGET RECORD: #${row.id}`,
  user: (row) => `USER: ${row.username}`,
  user_administrated_boards_board: (row) => `USER #${row.userId} admins BOARD #${row.boardId}`,
  user_boards_board: (row) => `USER #${row.userId} member IN BOARD #${row.boardId}`,
}
