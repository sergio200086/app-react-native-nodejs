import { connect } from "../database";

export const getTasks = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM Tasks");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};
