import { connect } from "../database";

export const updateTask = async (req, res) => {
  try {
    const connection = await connect();
    const result = await connection.query("UPDATE Tasks SET ? WHERE id = ?", [
      req.body,
      req.params.task,
    ]);
    res.sendStatus(204);
  } catch (error) {
    res.send(error);
  }
};
