import crypto from "crypto";

export function generateRandomId(length = 16) {
    return crypto.randomBytes(length).toString("hex");
}