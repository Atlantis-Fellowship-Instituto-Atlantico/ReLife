import { Router } from "express";
import { CreateUserController } from "../controllers/userControllers/CreateUserController";
import { GetAllUsersController } from "../controllers/userControllers/GetAllUsersController";
import { GetUserByIdController } from "../controllers/userControllers/GetUserByIdController";
import { DeleteUserController } from "../controllers/userControllers/DeleteUserController";
import { UpdateUserController } from "../controllers/userControllers/UpdateUserController";
import { GetUserByEmailController } from "../controllers/userControllers/GetUserByEmailController";
import { GetUserByCpfController } from "../controllers/userControllers/GetUserByCpfController";
import ensureMajorAutorization from "../middlewares/ensureMajorAutorization";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import ensureAdmin from "../middlewares/ensureAdmin";

const userRoutes = Router();

//Create
const createUserController = new CreateUserController();
//List
const getAllUsersController = new GetAllUsersController();
//ListById
const getByIdUserController = new GetUserByIdController();
//ListBycpf
const getByCpfUserController = new GetUserByCpfController();
//ListByEmail
const getByEmailUserController = new GetUserByEmailController();
//Update
const updateUserController = new UpdateUserController();
//Remove
const deleteUserController = new DeleteUserController();

//Post
userRoutes.post("/", createUserController.handle);
//Get
userRoutes.get("/", getAllUsersController.handle);
//GetById
// userRoutes.get("/:user_id",  getByIdUserController.handle);
//GetBycpf
userRoutes.get("/:cpf", ensureMajorAutorization, getByCpfUserController.handle);
//GetByEmail
userRoutes.get(
  "/search/:email",
  ensureMajorAutorization,
  getByEmailUserController.handle
);
//Put
userRoutes.put("/:user_id", ensureAuthenticated, updateUserController.handle);
//Delete
userRoutes.delete("/:cpf", ensureAdmin, deleteUserController.handle);

export { userRoutes };
