import { Router } from "express";
import { CreateInstitutionController } from "../controllers/institutionControllers/CreateInstitutionController";
import { DeleteInstitutionController } from "../controllers/institutionControllers/DeleteInstitutionController";
import { GetAllInstitutionsController } from "../controllers/institutionControllers/GetAllInstitutionsController";
import { GetByIdInstitutionController } from "../controllers/institutionControllers/GetByIdInstitutionController";
import { UpdateInstitutionController } from "../controllers/institutionControllers/UpdateInstitutionController";
import { UpdateUserByInstitutionController } from "../controllers/userControllers/UpdateUserByInstitutionController";
import ensureAdmin from "../middlewares/ensureAdmin";
import ensureDeleteAutorization from "../middlewares/ensureDeleteAutorization";
import ensureInstitution from "../middlewares/ensureInstitution";

const institutionRoutes = Router();

//Create
const createInstitutionController = new CreateInstitutionController();
//List
const getAllInstitutionsController = new GetAllInstitutionsController();
//ListById
const getByIdInstitutionController = new GetByIdInstitutionController();
//Update
const updateInstitutionController = new UpdateInstitutionController();
//Remove
const deleteInstitutionController = new DeleteInstitutionController();

//Edit User
const updateUserByInstitutionController =
  new UpdateUserByInstitutionController();

//Post
institutionRoutes.post("/", ensureAdmin, createInstitutionController.handle);
//Get
institutionRoutes.get("/", getAllInstitutionsController.handle);
//GetById
// institutionRoutes.get("/:institution_id", getByIdInstitutionController.handle);
//Put
institutionRoutes.put(
  "/:institution_id",
  ensureInstitution,
  updateInstitutionController.handle
);
//Put
institutionRoutes.put(
  "/users/:cpf",
  ensureInstitution,
  updateUserByInstitutionController.handle
);
//Delete
institutionRoutes.delete(
  "/:institution_id",
  ensureDeleteAutorization,
  deleteInstitutionController.handle
);

export { institutionRoutes };
