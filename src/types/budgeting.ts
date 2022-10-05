import { IBoard } from "./boards"

export interface IBudgetingCategory {
  board: {
    id: IBoard["id"]
    name: IBoard["name"]
  }
  id: number
  name: string
  type: IBudgetingCategoryType
}

export interface IBudgetingCategoryType {
  id: number
  name: string
}

export interface IBudgetingRecord {
  amount: number
  category: IBudgetingCategory
  date: string
  id: number
  isTrashed: boolean
}
