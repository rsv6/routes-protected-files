import { Router } from "express";
import { UserControler } from "../../controllers/UserController";

export function userRoutes() {

    return Router()
        .get("/api/user/register", new UserControler().register);
}