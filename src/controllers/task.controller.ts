import { Request, Response } from "express";
import { Task } from "../models/Task";



class TaskController {

    async getTasks(req: Request, res: Response) {

        try {

            const tasks = await Task.find();

            return res.status(200).json(tasks);

        } catch (error) {

            if (error instanceof Error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error: error.message
                })
            }
        }
    }


    async getTaskById(req : Request, res : Response) {

        try {

            const { taskId } = req.params;

            const task = await Task.findOneBy({
                taskId: Number.parseInt(taskId)
            })

            if(!task) {
                return res.status(404).json({
                    message: `No task found with the id ${ taskId }`
                })
            }

            return res.status(200).json(task);
            
        } catch (error) {

            if (error instanceof Error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error: error.message
                })
            }
        }

    }


    async getTasksByUserId(req: Request, res: Response) {

        try {

            const { userId } = req.query;


            if (!userId) {
                return res.status(400).json({
                    message: 'Bad Request, plase provide the userId'
                })
            }

            const tasks = await Task.findBy({
                user: {
                    userId: Number.parseInt(userId.toString())
                }
            });


            if(tasks.length < 1) {
                return res.status(404).json({
                    message: 'No tasks found with the userId'
                })
            }

            return res.status(200).json(tasks);

        } catch (error) {

            if (error instanceof Error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error: error.message
                })
            }
        }
    }



    async createTask(req: Request<any, any, Task>, res: Response) {

        try {

            const { title, description, user } = req.body;


            const newTask = new Task();
            newTask.title = title;
            newTask.description = description;
            newTask.user = user;

            await newTask.save();

            return res.status(201).json({
                message: 'Task created',
                task: newTask
            })            

        } catch (error) {

            if (error instanceof Error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error: error.message
                })
            }
        }
    }


    async updateTask(req: Request<any, any, Task>, res: Response) {

        try {

            const { taskId } = req.params;

            const task = await Task.findOneBy({
                taskId: Number.parseInt(taskId)
            });


            if(!task) {
                return res.status(404).json({
                    message: `No task found with the id ${ taskId }`
                });
            }

            


            const { title, description, user } = req.body;


            task.title = title;
            task.description = description;
            task.user = user;

            await task.save();

            return res.status(201).json({
                message: 'Task updated',
                task: task
            })            

        } catch (error) {

            if (error instanceof Error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error: error.message
                })
            }
        }
    }


    async deleteTask(req : Request, res : Response) {

        try {

            const { taskId } = req.params;

            const task = await Task.findOneBy({
                taskId: Number.parseInt(taskId)
            });

            if(!task) {
                return res.status(404).json({
                    message: `No task found with the id ${ taskId }`
                });
            }


            await task.remove();

            return res.status(200).json({
                message: 'Task deleted'
            });
            
        } catch (error) {

            if (error instanceof Error) {
                return res.status(500).json({
                    message: 'Internal Server Error',
                    error: error.message
                })
            }
        }

    }

}


export default TaskController;