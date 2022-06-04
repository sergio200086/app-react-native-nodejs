import { connect } from "../database";

export const getTask = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM Tasks WHERE id = ?", [
      req.params.task,
    ]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(500);
  }
};
