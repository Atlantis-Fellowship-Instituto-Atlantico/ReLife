import { Router } from "express";
import { CreateReceiverController } from "../controllers/receiverControllers/CreateReceiverController";
import { DeleteReceiverController } from "../controllers/receiverControllers/DeleteReceiverController";
import { GetAllReceiversController } from "../controllers/receiverControllers/GetAllReceiversController";
import { GetReceiverByIdController } from "../controllers/receiverControllers/GetReceiverByIdController";
import { UpdateReceiverController } from "../controllers/receiverControllers/UpdateReceiverController";

const receiverRoutes = Router();

//Create
const createReceiverController = new CreateReceiverController();
//List
const getAllReceiversController = new GetAllReceiversController();
//ListById
const getByIdReceiverController = new GetReceiverByIdController();
//Update
const updateReceiverController = new UpdateReceiverController();
//Remove
const deleteReceiverController = new DeleteReceiverController();

//Post
receiverRoutes.post("/", createReceiverController.handle);
//Get
receiverRoutes.get("/", getAllReceiversController.handle);
// //GetById
receiverRoutes.get("/:donor_id", getByIdReceiverController.handle);
// //Put
receiverRoutes.put("/:donor_id", updateReceiverController.handle);
// //Delete
receiverRoutes.delete("/:donor_id", deleteReceiverController.handle);

export { receiverRoutes };
