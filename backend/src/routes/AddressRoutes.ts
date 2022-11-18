import { Router } from "express";
import { GetAddressByIdController } from "../controllers/addressControllers/GetAddressByIdController";
import { GetInstitutionsAddressByCityController } from "../controllers/addressControllers/GetInstitutionsAddressByCityController";
import { GetInstitutionsAddressByCountryController } from "../controllers/addressControllers/GetInstitutionsAddressByCountryController";
import { GetInstitutionsAddressByStateController } from "../controllers/addressControllers/GetInstitutionsAddressByStateController";
import { GetUsersAddressByCityController } from "../controllers/addressControllers/GetUsersAddressByCityController";
import { GetUsersAddressByCountryController } from "../controllers/addressControllers/GetUsersAddressByCountryController";
import { GetUsersAddressByStateController } from "../controllers/addressControllers/GetUsersAddressByStateController";

const addressRoutes = Router();

//ListById
const listAddressByIdController = new GetAddressByIdController();

//Users
//ListByCity
const listUsersAddressByCityController = new GetUsersAddressByCityController();
//ListByState
const listUsersAddressByStateController =
  new GetUsersAddressByStateController();
//ListByCountry
// const listUsersAddressByCountryController =
//   new GetUsersAddressByCountryController();

//Institutions
//ListByCity
const listInstitutionsAddressByCityController =
  new GetInstitutionsAddressByCityController();
//ListByState
const listInstitutionsAddressByStateController =
  new GetInstitutionsAddressByStateController();
//ListByCountry
// const listInstitutionsAddressByCountryController =
//   new GetInstitutionsAddressByCountryController();

//Users
//GetByCountry
// addressRoutes.get("/users/", listUsersAddressByCountryController.handle);
//GetByState
addressRoutes.get("/users/:uf", listUsersAddressByStateController.handle);
//GetByCity
addressRoutes.get(
  "/users/search/:city",
  listUsersAddressByCityController.handle
);

//Institutions
//GetByCountry
// addressRoutes.get(
//   "/institutions/",
//   listInstitutionsAddressByCountryController.handle
// );
//GetByState
addressRoutes.get(
  "/institutions/:uf",
  listInstitutionsAddressByStateController.handle
);
//GetByCity
addressRoutes.get(
  "/institutions/search/:city",
  listInstitutionsAddressByCityController.handle
);

export { addressRoutes };
