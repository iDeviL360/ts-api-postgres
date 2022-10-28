import { Router } from "express";
import UserController from "../controllers/user.controller";


const router = Router();
const userController = new UserController();


router.get('/users', userController.getUsers);

router.get('/users/:userId', userController.getUserById);

router.post('/users', userController.createUser);

router.put('/users/:userId', userController.updateUser);

router.delete('/users/:userId', userController.deleteUserById);


export default router;