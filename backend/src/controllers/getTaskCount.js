import { connect } from "../database";

export const getTaskCount = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("SELECT count(*) FROM Tasks");
    res.json(rows[0]["count(*)"]);
  } catch (error) {
    res.sendStatus(500);
  }
};
