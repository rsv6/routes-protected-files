import { IUser } from "../interfaces/IUser";
import { User } from "../models/User";

export class UserRepository implements IUser {
    

    async register(user: User): Promise<object> {

        try {
            if (user.email == undefined || user.email == "") {
    
                return {
                    result: "false",
                    data: [],
                    msg: "Register failed!!!"
                };
            }
            return {
                result: "true",
                data: {...new User(user.idRegister, user.email, user.password)},
                msg: "User register with successfully!"
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