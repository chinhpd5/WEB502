interface IUser {
    id: string;
    email: string;
    password: string;
    name: string;
    age: number
}

export type UserInput = Omit<IUser,"id">

export default IUser