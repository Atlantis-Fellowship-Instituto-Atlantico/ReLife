import { Router } from "express";
import { CreateAddressController } from "../controllers/addressControllers/CreateAddressController";
import { DeleteAddressController } from "../controllers/addressControllers/DeleteAddressController";
import { GetAllAddressesController } from "../controllers/addressControllers/GetAllAddressesController";
import { UpdateAddressController } from "../controllers/addressControllers/UpdateAddressController";

const router = Router();

//Creatioms
const createUserController = new CreateAddressController();

//Lists
const listAddressesController = new GetAllAddressesController();

//Updates
const updateAddressController = new UpdateAddressController();

//Deletes
const deleteAddressController = new DeleteAddressController();

//Routes Post
router.post("/addresses", createUserController.handle);

//Routes Get
router.get("/addresses", listAddressesController.handle);

//Routes Put
router.put("/addresses/:id", updateAddressController.handle);
//Routes Delete
router.delete("/addresses/:id", deleteAddressController.handle);

export { router };
