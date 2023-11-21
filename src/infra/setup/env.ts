/* eslint-disable linebreak-style */
console.log("PORT env: ", process.env.PORT);

export const env = {
    port: process.env.PORT || 3005,
    db_url: process.env.DATABASE_URL
};