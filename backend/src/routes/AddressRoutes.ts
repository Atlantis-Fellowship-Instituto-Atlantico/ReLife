import { Router } from "express";
import { CreateAddressController } from "../controllers/addressControllers/CreateAddressController";
import { DeleteAddressController } from "../controllers/addressControllers/DeleteAddressController";
import { GetAllAddressesController } from "../controllers/addressControllers/GetAllAddressesController";
import { GetByIdAddressController } from "../controllers/addressControllers/GetByIdAddressController";
import { UpdateAddressController } from "../controllers/addressControllers/UpdateAddressController";

const addressRoutes = Router();

//Create
const createUserController = new CreateAddressController();

//ListAll
const listAddressesController = new GetAllAddressesController();

//ListById
const getByIdAddressController = new GetByIdAddressController();

//Update
const updateAddressController = new UpdateAddressController();

//Delete
const deleteAddressController = new DeleteAddressController();

//Post
addressRoutes.post("/", createUserController.handle);

//Get
addressRoutes.get("/", listAddressesController.handle);

//GetById
addressRoutes.get("/:id", getByIdAddressController.handle);

//Put
addressRoutes.put("/:id", updateAddressController.handle);

//Delete
addressRoutes.delete("/:id", deleteAddressController.handle);

export { addressRoutes };
