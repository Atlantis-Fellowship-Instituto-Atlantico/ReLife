import { Router } from "express";
import { CreateOrganController } from "../controllers/organControllers/CreateOrganController";
import { DeleteOrganController } from "../controllers/organControllers/DeleteOrganController";
import { GetAllOrgansController } from "../controllers/organControllers/GetAllOrgansController";
import { GetByIdOrganController } from "../controllers/organControllers/GetByIdOrganController";
import { UpdateOrganController } from "../controllers/organControllers/UpdateOrganController";
import ensureInstitution from "../middlewares/ensureInstitution";

const organRoutes = Router();

//Create
const createOrganController = new CreateOrganController();
//ListAll
const getAllOrgansController = new GetAllOrgansController();
//ListById
const getByIdOrganController = new GetByIdOrganController();
//Update
const updateOrganController = new UpdateOrganController();
//Delete
const deleteOrganController = new DeleteOrganController();

//Post
organRoutes.post("/", ensureInstitution, createOrganController.handle);
//Get
organRoutes.get("/", getAllOrgansController.handle);
//GetById
// organRoutes.get("/:organ_id", getByIdOrganController.handle);
//Update
organRoutes.put("/:organ_id", ensureInstitution, updateOrganController.handle);
//Delete
organRoutes.delete(
  "/:organ_id",
  ensureInstitution,
  deleteOrganController.handle
);

export { organRoutes };
