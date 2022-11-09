import { Router } from "express";
import { GetAllAddressesController } from "../controllers/addressControllers/GetAllAddressesController";

const addressRoutes = Router();

//Create

//ListAll
const listAddressesController = new GetAllAddressesController();

//ListById

//Update

//Delete

//Post

//Get
addressRoutes.get("/", listAddressesController.getAll);

//GetById

//Put

//Delete

export { addressRoutes };
