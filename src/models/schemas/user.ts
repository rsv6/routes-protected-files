import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateUser = (schema: z.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                errors: result.error.issues.map((issue) => issue.message),
            });
        }
    
        next();
    };
};

export const userRegisterSchema = z.object({
    email: z.string()
        .min(3)
        .max(50)
        .email(),
    password: z.string()
        .min(3)
});