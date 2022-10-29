import { Router } from "express";
import TaskController from "../controllers/task.controller";



const router = Router();
const taskController = new TaskController();


router.get('/tasks', taskController.getTasks);

router.get('/tasks/users', taskController.getTasksByUserId);

router.get('/tasks/:taskId', taskController.getTaskById);

router.post('/tasks', taskController.createTask);

router.put('/tasks/:taskId', taskController.updateTask);




export default router;