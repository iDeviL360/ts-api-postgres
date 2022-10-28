import { Request, Response } from "express";
import { json } from "stream/consumers";
import { dataSource } from '../data-source';
import { User } from "../models/User";


class UserController {

    
    async getUsers(req : Request, res: Response) {

        try {

            const users = await User.find();

            return res.status(200).json(users);
            
        } catch (error) {
            if(error instanceof Error) {
                return res.status(500).json({
                    message: error.message
                })
            }
        }
    }


    async getUserById(req : Request, res : Response) {

        try {

            const { userId } = req.params;

            const user = await User.findOneBy({
                userId: Number.parseInt(userId)
            })

            if(user) {
                return res.status(200).json(user);
            } else {
                return res.status(404).json({
                    'message': 'User not found'
                });
            }
            
        } catch (error) {
            if(error instanceof Error) {
                return res.status(500).json({
                    message: error.message
                })
            }   
        }
    }

    async createUser(req: Request, res: Response) {

        try {

            const { name } = req.body;

            const newUser = new User();
            newUser.name = name;

            await newUser.save();

            return res.status(201).json({
                message: 'User has created succesfully',
                user: newUser
            });

            
        } catch (error) {

            if(error instanceof Error) {
                return res.status(500).json({
                    message: error.message
                })
            }
        }
    }


    async updateUser(req : Request, res : Response) {

        try {

            const { userId } = req.params;

            const user = await User.findOneBy({
                userId: Number.parseInt(userId)
            })

            if(user) {

                const { name } = req.body;
                user.name = name;

                await user.save();

                return res.status(201).json({
                    message: 'User updated',
                    user: user
                })
                
            } else {
                return res.status(404).json({
                    'message': 'User not found'
                });
            }

        } catch (error) {

            if(error instanceof Error) {
                return res.status(500).json({
                    message: error.message
                })
            }

        }
    }


    async deleteUserById(req : Request, res : Response) {

        try {

            const { userId } = req.params;

            const user = await User.findOneBy({
                userId: Number.parseInt(userId)
            })


            if(user) {

                await user.remove();

                return res.status(200).json({
                    message: 'User deleted',
                    userId: user.userId
                })
                
            } else {
                return res.status(404).json({
                    'message': 'User not found'
                });
            }
  
        } catch (error) {

            if(error instanceof Error) {
                return res.status(500).json({
                    message: error.message
                })
            }
        }

    }

}


export default UserController;