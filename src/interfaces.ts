export interface IUser {
    _id?: string;
    fisrtName: string;
    lastName: string;
    email: string;
    password: string;
    dateRegistration: number;
}

export type defautSchema = {
    // {type: String, required: true}
}