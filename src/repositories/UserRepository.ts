import { IUser } from "../interfaces/IUser";
import { User } from "../models/User";

export class UserRepository implements IUser {
    

    async register(user: User): Promise<object> {

        // register knex:
        // new User(user.idRegister, user.email, user.password)

        try {

            // validar se foi registrado:
            console.log("Passou por aqui");
            return {
                result: "true",
                data: {},
                msg: `User ${user.email} register with successfully!`
            };
        } catch (error) {

            return {
                result: null,
                data: [],
                msg: "Exception Error: "+error
            };
        }
    }

}