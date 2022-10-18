import { Router } from "express";
import { addressRoutes } from "./AddressRoutes";
import { organsRoutes } from "./OrganRoutes";

const routes = Router();

routes.use("/addresses", addressRoutes);
routes.use("/organs", organsRoutes);

export { routes };
