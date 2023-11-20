import { Router } from "express";
import { userRoutes } from "./userRoutes";

export function appRoutes() {

    return Router()
        .use(userRoutes());
}