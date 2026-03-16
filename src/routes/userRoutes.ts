import { Router } from "express";
import { getUser, addUser } from "../controllers/userController.ts"

const routerUsers:Router = Router();

routerUsers.get('/getUsers', getUser)
routerUsers.post('/addUser', addUser)

export default routerUsers;