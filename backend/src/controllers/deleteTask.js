import { connect } from "../database";

export const deleteTask = async (req, res) => {
  try {
    const connection = await connect();
    const result = await connection.query("DELETE FROM Tasks WHERE id = ?", [
      req.params.task,
    ]);
    res.send(204);
  } catch (error) {
    req.sendStatus(500);
  }
};
