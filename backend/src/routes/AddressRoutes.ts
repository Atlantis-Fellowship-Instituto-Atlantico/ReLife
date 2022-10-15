import { Router } from "express";
import { CreateAddressController } from "../controllers/addressControllers/CreateAddressController";
import { DeleteAddressController } from "../controllers/addressControllers/DeleteAddressController";
import { GetAllAddressesController } from "../controllers/addressControllers/GetAllAddressesController";
import { UpdateAddressController } from "../controllers/addressControllers/UpdateAddressController";

const addressRoutes = Router();

//Create
const createUserController = new CreateAddressController();

//List
const listAddressesController = new GetAllAddressesController();

//Update
const updateAddressController = new UpdateAddressController();

//Delete
const deleteAddressController = new DeleteAddressController();

//Post
addressRoutes.post("/", createUserController.handle);

//Get
addressRoutes.get("/", listAddressesController.handle);

//Put
addressRoutes.put("/:id", updateAddressController.handle);

//Delete
addressRoutes.delete("/:id", deleteAddressController.handle);

export { addressRoutes };
