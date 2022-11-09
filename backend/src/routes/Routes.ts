import { Router } from "express";
import { addressRoutes } from "./AddressRoutes";
import { authRoute } from "./AuthRoute";
import { donorRoutes } from "./DonorRoutes";
import { institutionRoutes } from "./InstitutionRoutes";
import { organRoutes } from "./OrganRoutes";
import { receiverRoutes } from "./ReceiverRoutes";
import { userRoutes } from "./UserRoutes";

const routes = Router();

routes.use("/addresses", addressRoutes);
routes.use("/organs", organRoutes);
routes.use("/users", userRoutes);
routes.use("/institutions", institutionRoutes);
routes.use("/authenticate", authRoute);
routes.use("/users/donors", donorRoutes);
routes.use("/users/receivers", receiverRoutes);

export { routes };
