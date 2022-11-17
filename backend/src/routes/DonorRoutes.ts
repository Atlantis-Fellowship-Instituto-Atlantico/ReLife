import { Router } from "express";
import { CreateDonorController } from "../controllers/donorControllers/CreateDonorController";
import { DeleteDonorController } from "../controllers/donorControllers/DeleteDonorController";
import { GetAllDonorsController } from "../controllers/donorControllers/GetAllDonorsController";
import { GetDonorByCpfController } from "../controllers/donorControllers/GetDonorByCpfController";
import { GetDonorByEmailController } from "../controllers/donorControllers/GetDonorByEmailController";
import { GetDonorByIdController } from "../controllers/donorControllers/GetDonorByIdController";
import { UpdateDonorController } from "../controllers/donorControllers/UpdateDonorController";
import ensureAdmin from "../middlewares/ensureAdmin";

const donorRoutes = Router();

//Create
const createDonorController = new CreateDonorController();
//List
const getAllDonorsController = new GetAllDonorsController();
//ListById
const getByIdDonorController = new GetDonorByIdController();
//ListByCpf
const getByCpfDonorController = new GetDonorByCpfController();
//ListByEmail
const getByEmailDonorController = new GetDonorByEmailController();
//Update
const updateDonorController = new UpdateDonorController();
//Remove
const deleteDonorController = new DeleteDonorController();

//Post
donorRoutes.post("/", createDonorController.handle);
//Get
donorRoutes.get("/", getAllDonorsController.handle);
//GetById
// donorRoutes.get("/:donor_id", getByIdDonorController.handle);
//GetByCpf
donorRoutes.get("/:cpf", getByCpfDonorController.handle);
//GetByEmail
// donorRoutes.get("/:email", getByEmailDonorController.handle);
//Put
donorRoutes.put("/:donor_id", updateDonorController.handle);
// //Delete
donorRoutes.delete("/:donor_id", ensureAdmin, deleteDonorController.handle);

export { donorRoutes };
