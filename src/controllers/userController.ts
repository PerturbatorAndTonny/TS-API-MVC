import type { Request, Response } from 'express';

interface User {
    id: number;
    name: string;
    email: string;
}

type getUserFuntion = (req: Request, res: Response) => Promise<Response>;

export const getUser: getUserFuntion = async (req, res) => {
    try {
        const userCollection: User[] = [
            { id: 1, name: 'Jhon Doe', email: 'jane@example.com' },
            { id: 2, name: 'John Smith', email: 'john@example.com' }
        ]
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
