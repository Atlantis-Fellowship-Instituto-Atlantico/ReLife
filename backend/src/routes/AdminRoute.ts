import { Router } from "express";
import { CreateAdminController } from "../controllers/adminControllers/CreateAdminController";
import { DeleteAdminController } from "../controllers/adminControllers/DeleteAdminController";
import { UpdateAdminController } from "../controllers/adminControllers/UpdateAdminController";
import ensureAdmin from "../middlewares/ensureAdmin";

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
adminRoutes.put("/:admin_id", ensureAdmin, updateAdminController.handle);
//Delete
adminRoutes.delete("/:email", ensureAdmin, deleteAdminController.handle);

export { adminRoutes };
