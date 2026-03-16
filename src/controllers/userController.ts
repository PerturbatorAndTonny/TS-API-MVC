import type { Request, Response } from 'express';
import { listUsers } from '../model/userModel.ts';

type getUserFuntion = (req: Request, res: Response) => Promise<Response>;

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
