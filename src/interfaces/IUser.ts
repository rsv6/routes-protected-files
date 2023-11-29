import { User } from "../models/User";

export interface IUserProps {
    idRegister: string | undefined;
    email: string | undefined;
    password: string | undefined;
}

export interface IUser {

    register(user: User): Promise<object>;
    
}