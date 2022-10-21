import { Router } from "express";
import { CreateUserController } from "../controllers/userControllers/CreateUserController";
import { DeleteUserController } from "../controllers/userControllers/DeleteUserController";
import { GetAllUsersController } from "../controllers/userControllers/GetAllUsersController";
import { GetByIdUserController } from "../controllers/userControllers/GetByIdUserController";
import { UpdateUserController } from "../controllers/userControllers/UpdateUserController";

const userRoutes = Router();

//Create
const createUserController = new CreateUserController();
//List
const getAllUsersController = new GetAllUsersController();
//ListById
const getByIdUserController = new GetByIdUserController();
//Update
const updateUserController = new UpdateUserController();
//Remove
const deleteUserController = new DeleteUserController();

//Post
userRoutes.post("/", createUserController.handle);
//Get
userRoutes.get("/", getAllUsersController.handle);
//GetById
userRoutes.get("/:id", getByIdUserController.handle);
//Put
userRoutes.put("/:id", updateUserController.handle);
//Delete
userRoutes.delete("/:id", deleteUserController.handle);

export { userRoutes };
