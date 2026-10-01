import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.delete("/:id", protect, deleteTask);
router.patch("/:id", protect, updateTask);

export default router;