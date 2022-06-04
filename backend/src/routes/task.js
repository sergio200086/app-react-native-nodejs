import { Router } from "express";
import { getTask } from "../controllers/getTask";
import { getTasks } from "../controllers/getTasks";
import { getTaskCount } from "../controllers/getTaskCount";
import { createTask } from "../controllers/createTask";
import { deleteTask } from "../controllers/deleteTask";
import { updateTask } from "../controllers/updateTask";
const router = Router();

/**
 * @swagger
 * /task:
 * get:
 *   summary: Get all tasks
 *
 */
router.get("/task", getTasks);

router.get("/task/count", getTaskCount);

router.get("/task/:task", getTask);

router.post("/task", createTask);

router.delete("/task/:task", deleteTask);

router.put("/task/:task", updateTask);

export default router;
