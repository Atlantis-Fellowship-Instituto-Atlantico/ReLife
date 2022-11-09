import { Router } from "express";
import { CreateOrganController } from "../controllers/organControllers/CreateOrganController";
import { DeleteOrganController } from "../controllers/organControllers/DeleteOrganController";
import { GetAllOrgansController } from "../controllers/organControllers/GetAllOrgansController";
import { GetByIdOrganController } from "../controllers/organControllers/GetByIdOrganController";
import { UpdateOrganController } from "../controllers/organControllers/UpdateOrganController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import ensureAutorization from "../middlewares/ensureAutorization";

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
organRoutes.post("/", ensureAutorization, createOrganController.handle);
//Get
organRoutes.get("/", ensureAuthenticated, getAllOrgansController.handle);
//GetById
organRoutes.get(
  "/:organ_id",
  ensureAuthenticated,
  getByIdOrganController.handle
);
//Update
organRoutes.put("/:organ_id", ensureAutorization, updateOrganController.handle);
//Delete
organRoutes.delete(
  "/:organ_id",
  ensureAutorization,
  deleteOrganController.handle
);

export { organRoutes };
