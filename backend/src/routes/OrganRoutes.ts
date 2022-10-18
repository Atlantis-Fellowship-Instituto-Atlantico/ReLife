import { Router } from "express";
import { CreateOrganController } from "../controllers/organControllers/CreateOrganController";
import { DeleteOrganController } from "../controllers/organControllers/DeleteOrganController";
import { GetAllOrgansController } from "../controllers/organControllers/GetAllOrgansController";
import { GetByIdOrganController } from "../controllers/organControllers/GetByIdOrganController";
import { UpdateOrganController } from "../controllers/organControllers/UpdateOrganController";

const organsRoutes = Router();

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
organsRoutes.post("/", createOrganController.handle);

//Get
organsRoutes.get("/", getAllOrgansController.handle);

//GetById
organsRoutes.get("/:id", getByIdOrganController.handle);

//Update
organsRoutes.put("/:id", updateOrganController.handle);

//Delete
organsRoutes.delete("/:id", deleteOrganController.handle);

export { organsRoutes };
