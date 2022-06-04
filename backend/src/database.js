import mysql from "mysql2/promise";
import { config } from "./config";

export const connect = async () => {
  try {
    return await mysql.createConnection(config);
  } catch (error) {
    console.log(error);
  }
};
