import { IUserProps } from "../interfaces/IUser";


export class User implements IUserProps {
    idRegister: string;
    email: string;
    password: string;

    constructor(idRegister: string, email: string, password: string) {
        this.idRegister = idRegister;
        this.email = email;
        this.password = password;
    }
}