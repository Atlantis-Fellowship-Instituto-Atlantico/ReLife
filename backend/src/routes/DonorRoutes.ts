import { Router } from "express";
import { CreateDonorController } from "../controllers/donorControllers/CreateDonorController";
import { DeleteDonorController } from "../controllers/donorControllers/DeleteDonorController";
import { GetAllDonorsController } from "../controllers/donorControllers/GetAllDonorsController";
import { GetDonorByIdController } from "../controllers/donorControllers/GetDonorByIdController";
import { UpdateDonorController } from "../controllers/donorControllers/UpdateDonorController";

const donorRoutes = Router();

//Create
const createDonorController = new CreateDonorController();
//List
const getAllDonorsController = new GetAllDonorsController();
//ListById
const getByIdDonorController = new GetDonorByIdController();
//Update
const updateDonorController = new UpdateDonorController();
//Remove
const deleteDonorController = new DeleteDonorController();

//Post
donorRoutes.post("/", createDonorController.handle);
//Get
donorRoutes.get("/", getAllDonorsController.handle);
// //GetById
donorRoutes.get("/:donor_id", getByIdDonorController.handle);
// //Put
donorRoutes.put("/:donor_id", updateDonorController.handle);
// //Delete
donorRoutes.delete("/:donor_id", deleteDonorController.handle);

export { donorRoutes };
