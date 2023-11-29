import { Router } from "express";
import { UserControler } from "../../controllers/UserController";
import { userRegisterSchema, validateUser } from "../../models/schemas/user";

export function userRoutes() {

    return Router()
        .post(
            "/api/user/register", 
            validateUser(userRegisterSchema), 
            new UserControler().register
        );
}