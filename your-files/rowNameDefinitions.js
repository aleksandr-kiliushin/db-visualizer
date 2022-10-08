// export const rowNameDefinitions = (row) => "Hello from callback"

export const rowNameDefinitions = {
  board: (row) => `Board: ${row.name}`,
  board_subject: (row) => `Board subject: ${row.name}`,
  budgeting_category: (row) => `Budg.categ.: ${row.name}`,
  budgeting_category_type: (row) => `Budg.categ.type: ${row.name}`,
  budgeting_record: (row) => `Budget record #${row.id}`,
  user: (row) => `User: ${row.username}`,
  user_administrated_boards_board: (row) => `User #${row.userId} admins board #${row.boardId}`,
  user_boards_board: (row) => `User #${row.userId} member in board #${row.boardId}`,
}
