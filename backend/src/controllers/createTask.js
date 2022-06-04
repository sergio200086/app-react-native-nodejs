import { connect } from "../database";

export const createTask = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.query(
      "INSERT INTO Tasks(title, descripcion) VALUES (?, ?)",
      [req.body.title, req.body.descripcion]
    );
    res.json({
      id: results.insertId,
      ...req.body,
    });
  } catch (error) {
    res.sendStatus(500, error);
  }
};
