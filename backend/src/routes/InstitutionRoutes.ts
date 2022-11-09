import { Router } from "express";
import { CreateInstitutionController } from "../controllers/institutionControllers/CreateInstitutionController";
import { DeleteInstitutionController } from "../controllers/institutionControllers/DeleteInstitutionController";
import { GetAllInstitutionsController } from "../controllers/institutionControllers/GetAllInstitutionsController";
import { GetByIdInstitutionController } from "../controllers/institutionControllers/GetByIdInstitutionController";
import { UpdateInstitutionController } from "../controllers/institutionControllers/UpdateInstitutionController";
import { GetUserByEmailController } from "../controllers/userControllers/GetUserByEmailController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import ensureAutorization from "../middlewares/ensureAutorization";

const institutionRoutes = Router();

//Create
const createInstitutionController = new CreateInstitutionController();
//List
const getAllInstitutionsController = new GetAllInstitutionsController();
//ListById
const getByIdInstitutionController = new GetByIdInstitutionController();
//GetUsersByEmail
const getByEmailUserController = new GetUserByEmailController();
//Update
const updateInstitutionController = new UpdateInstitutionController();
//Remove
const deleteInstitutionController = new DeleteInstitutionController();

//Post
institutionRoutes.post("/", createInstitutionController.handle);
//Get
institutionRoutes.get(
  "/",
  ensureAuthenticated,
  getAllInstitutionsController.handle
);
//GetById
institutionRoutes.get(
  "/:institution_id",
  ensureAuthenticated,
  getByIdInstitutionController.handle
);
//GetUsersByEmail
institutionRoutes.get(
  "/users/:email",
  ensureAutorization,
  getByEmailUserController.handle
);
//Put
institutionRoutes.put(
  "/:institution_id",
  ensureAutorization,
  updateInstitutionController.handle
);
//Delete
institutionRoutes.delete(
  "/:institution_id",
  ensureAutorization,
  deleteInstitutionController.handle
);

export { institutionRoutes };
