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
//GetById
addressRoutes.get("/:address_id", listAddressByIdController.handle);
//GetByCity
// addressRoutes.get("/:city", listAddressByCityController.handle);
//GetByState
// addressRoutes.get(":/state", listAddressByStateController.handle);
//GetByContry
// addressRoutes.get(":/contry", listAddressByContryController.handle);

export { addressRoutes };
