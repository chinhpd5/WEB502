interface IUser {
    id: string;
    email: string;
    password: string;
    confirmPassword?: string;
    name: string;
    age: number
}

export type UserInput = Omit<IUser,"id">
export type RegisterInput = Omit<IUser,"id"|"name"|"age">

export default IUser