export interface IUser {
  name: string,
  email: string,
  password: string,
  rePassword?: string
  gender: boolean,
  address: string
}

export type ResgiterInput = Omit<IUser, "gender" | "address">
export type LoginInput = Omit<IUser, "gender" | "address" | "name" | "rePassword">