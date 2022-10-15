import { Router } from "express";
import { addressRoutes } from "./AddressRoutes";

const routes = Router();

routes.use("/addresses", addressRoutes);

export { routes };
