import { Router } from "express";
import { CreateAdminController } from "../controllers/adminControllers/CreateAdminController";
import { DeleteAdminController } from "../controllers/adminControllers/DeleteAdminController";
import { UpdateAdminController } from "../controllers/adminControllers/UpdateAdminController";

const adminRoutes = Router();

//Create
const createAdminController = new CreateAdminController();
//Update
const updateAdminController = new UpdateAdminController();
//Remove
const deleteAdminController = new DeleteAdminController();

//Post
adminRoutes.post("/", createAdminController.handle);
//Put
adminRoutes.put("/:admin_id", updateAdminController.handle);
//Delete
adminRoutes.delete("/:admin_id", deleteAdminController.handle);

export { adminRoutes };
