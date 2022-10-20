import { Router } from "express";
import { CreateUserController } from "../controllers/userControllers/CreateUserController";

const userRoutes = Router();

//Create
const createUserController = new CreateUserController();

//Post
userRoutes.post("/", createUserController.handle);

export { userRoutes };
