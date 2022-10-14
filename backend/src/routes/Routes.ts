import { Router } from "express";
import { CreateAddressController } from "../controllers/addressControllers/CreateAddressController";

const router = Router();

const createUserController = new CreateAddressController();

router.post("/addresses", createUserController.handle);

export { router };
