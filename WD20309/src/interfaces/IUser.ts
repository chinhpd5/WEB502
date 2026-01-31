export interface IUser {
  id: string,
  name: string,
  email: string,
  password: string,
  rePassword?: string,
  gender: boolean,
  address: string
}

export type RegisterInput = Omit<IUser,"id" | "gender" | "address">
export type LoginInput = Omit<IUser,"id" | "gender" | "address" | "name" | "rePassword">