import { Router } from "express";
import { getUser } from "../controllers/userController.ts"

const routerUsers:Router = Router();

routerUsers.get('/getUsers', getUser)

export default routerUsers;