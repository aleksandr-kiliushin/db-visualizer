import { IUser } from "./user"

export interface IBoardSubject {
  id: number
  name: string
}

export interface IBoard {
  admins: IUser[]
  id: number
  members: IUser[]
  name: string
  subject: IBoardSubject
}
