import { Router } from "express";
import { addressRoutes } from "./AddressRoutes";
import { institutionRoutes } from "./InstitutionRoutes";
import { organRoutes } from "./OrganRoutes";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/addresses", addressRoutes);
routes.use("/organs", organRoutes);
routes.use("/users", userRoutes);
routes.use("/institutions", institutionRoutes);

export { routes };
