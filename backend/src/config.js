import { config as dotenv } from "dotenv";
dotenv();
console.log(process.env.NICKNAME);

export const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
