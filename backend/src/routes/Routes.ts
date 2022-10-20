import { Router } from "express";
import { addressRoutes } from "./AddressRoutes";
import { organsRoutes } from "./OrganRoutes";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/addresses", addressRoutes);
routes.use("/organs", organsRoutes);
routes.use("/users", userRoutes);

export { routes };
