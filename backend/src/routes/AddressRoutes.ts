import { Router } from "express";
import { GetAddressByCountryController } from "../controllers/addressControllers/GetAddressByCountryController";
import { GetAddressByIdController } from "../controllers/addressControllers/GetAddressByIdController";
import { GetAddressesByCityController } from "../controllers/addressControllers/GetAddressesByCityController";
import { GetAddressesByStateController } from "../controllers/addressControllers/GetAddressesByStateController";
import { GetAllAddressesController } from "../controllers/addressControllers/GetAllAddressesController";

const addressRoutes = Router();

//ListAll
const listAddressesController = new GetAllAddressesController();
//ListById
const listAddressByIdController = new GetAddressByIdController();
//ListByCity
const listAddressByCityController = new GetAddressesByCityController();
//ListByState
const listAddressByStateController = new GetAddressesByStateController();
//ListByCountry
const listAddressByContryController = new GetAddressByCountryController();

//Get
addressRoutes.get("/", listAddressesController.handle);
//GetByCity
addressRoutes.get("/:city", listAddressByCityController.handle);
//GetByState
addressRoutes.get("/search/:state", listAddressByStateController.handle);
//GetByContry
// addressRoutes.get(":/country", listAddressByContryController.handle);

export { addressRoutes };
