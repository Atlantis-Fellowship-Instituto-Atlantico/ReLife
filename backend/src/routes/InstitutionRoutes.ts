import { Router } from "express";
import { CreateInstitutionController } from "../controllers/institutionControllers/CreateInstitutionController";
import { DeleteInstitutionController } from "../controllers/institutionControllers/DeleteInstitutionController";
import { GetAllInstitutionsController } from "../controllers/institutionControllers/GetAllInstitutionsController";
import { GetByIdInstitutionController } from "../controllers/institutionControllers/GetByIdInstitutionController";
import { UpdateInstitutionController } from "../controllers/institutionControllers/UpdateInstitutionController";
import ensureAdmin from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

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

//Post
institutionRoutes.post("/", createInstitutionController.handle);
//Get
institutionRoutes.get("/", getAllInstitutionsController.handle);
//GetById
institutionRoutes.get("/:id", getByIdInstitutionController.handle);
//Put
institutionRoutes.put("/:id", updateInstitutionController.handle);
//Delete
institutionRoutes.delete(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteInstitutionController.handle
);

export { institutionRoutes };
