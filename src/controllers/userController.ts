import type { Request, Response } from 'express';
import { listUsers, createUser } from '../model/userModel.ts';

type getUserFuntion = (req: Request, res: Response) => Promise<Response>;
type createUserFuntion = (req: Request, res: Response) => Promise<Response>;

export const addUser: createUserFuntion = async (req, res) => {
    try {
        const newUser = await createUser(req.body)
        return res.status(200).json({
            message: "Record users",
            data: newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something goes wrong",
        });
    }
}

export const getUser: getUserFuntion = async (req, res) => {
    try {
        const userCollection = await listUsers();

        return res.status(200).json({
            message: "Record users",
            data: userCollection
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something goes wrong",
        });
    }
}
