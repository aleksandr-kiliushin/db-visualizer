export const queryDbDataResult = {
  board: [
    { id: 1, name: "clever-budgetiers", subjectId: 1 },
    { id: 2, name: "mega-economists", subjectId: 1 },
    { id: 3, name: "beautiful-sportsmen", subjectId: 2 },
  ],
  board_subject: [
    { id: 1, name: "budgeting" },
    { id: 2, name: "habits" },
  ],
  budgeting_category: [
    { id: 1, name: "clothes", typeId: 1, boardId: 1 },
    { id: 2, name: "education", typeId: 1, boardId: 1 },
    { id: 3, name: "gifts", typeId: 1, boardId: 2 },
    { id: 4, name: "gifts", typeId: 2, boardId: 2 },
    { id: 5, name: "salary", typeId: 2, boardId: 2 },
  ],
  budgeting_category_type: [
    { id: 1, name: "expense" },
    { id: 2, name: "income" },
  ],
  budgeting_record: [
    { amount: 100, date: "2022-08-01", id: 1, isTrashed: true, categoryId: 1 },
    { amount: 400, date: "2022-08-01", id: 2, isTrashed: true, categoryId: 2 },
    { amount: 25, date: "2022-08-01", id: 3, isTrashed: false, categoryId: 2 },
    { amount: 30, date: "2022-08-02", id: 4, isTrashed: false, categoryId: 3 },
    { amount: 10, date: "2022-08-02", id: 5, isTrashed: false, categoryId: 3 },
    { amount: 230, date: "2022-08-03", id: 6, isTrashed: false, categoryId: 4 },
  ],
  user: [
    { id: 1, username: "john-doe", password: "8bd309ffba83c3db9a53142b052468007b" },
    { id: 2, username: "jessica-stark", password: "8bd912e2fe84cd93c457142a1d7e77136c3bc954f183" },
  ],
  user_administrated_boards_board: [
    { userId: 1, boardId: 1 },
    { userId: 2, boardId: 2 },
    { userId: 2, boardId: 3 },
  ],
  user_boards_board: [
    { userId: 1, boardId: 1 },
    { userId: 2, boardId: 1 },
    { userId: 2, boardId: 2 },
    { userId: 2, boardId: 3 },
  ],
}
