import { Request, Response } from "express";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { generateRandomId } from "../services/generateRandomId";
import { validateFields } from "../services/validateFields";

export class UserControler {

    private static _userRepository: UserRepository = new UserRepository();

    async register(req: Request, res: Response): Promise<Response> {
        
        const { email, password } = req.body;

        // valida campos: melhor usar 'zod':
        if (!validateFields(email) || !validateFields(password)) {
            return res.status(404).json({
                result: "false",
                data: [],
                msg: "Fields empty or undefined!!!"
            });
        }

        // gerar id random:
        const idRegister: string = generateRandomId();

        // cria modelo de User:
        const user = new User(idRegister, email, password);

        // registra User:
        const result = await UserControler._userRepository.register(user);

        console.log("result: ", result);

        return res.status(200).json(result);
    }
}