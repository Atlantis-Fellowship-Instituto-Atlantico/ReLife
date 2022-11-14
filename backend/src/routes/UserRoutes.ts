import { Router } from "express";
import { CreateUserController } from "../controllers/userControllers/CreateUserController";
import { GetAllUsersController } from "../controllers/userControllers/GetAllUsersController";
import { GetUserByIdController } from "../controllers/userControllers/GetUserByIdController";
import { DeleteUserController } from "../controllers/userControllers/DeleteUserController";
import { UpdateUserController } from "../controllers/userControllers/UpdateUserController";
// import { GetUserByEmailController } from "../controllers/userControllers/GetUserByEmailController";
import ensureAdmin from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
// import ensureAdmin from "../middlewares/ensureAdmin";
// import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

//Create
const createUserController = new CreateUserController();
//List
const getAllUsersController = new GetAllUsersController();
//ListById
const getByIdUserController = new GetUserByIdController();
//ListByEmail
// const getByEmailUserController = new GetUserByEmailController();
//Update
const updateUserController = new UpdateUserController();
//Remove
const deleteUserController = new DeleteUserController();

//Post
userRoutes.post("/", createUserController.handle);
//Get
userRoutes.get("/", ensureAuthenticated, getAllUsersController.handle);
// //GetById
userRoutes.get("/:user_id", ensureAuthenticated, getByIdUserController.handle);
//GetByEmail
// userRoutes.get("/:email", ensureAutorization, getByEmailUserController.handle);
// //Put
userRoutes.put("/:user_id", ensureAuthenticated, updateUserController.handle);
// //Delete
userRoutes.delete("/:user_id", ensureAdmin, deleteUserController.handle);

export { userRoutes };
