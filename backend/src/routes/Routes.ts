import { Router } from "express";
const cors = require("cors");
import { addressRoutes } from "./AddressRoutes";
import { adminRoutes } from "./AdminRoute";
import { authRoute } from "./AuthRoute";
import { donorRoutes } from "./DonorRoutes";
import { institutionRoutes } from "./InstitutionRoutes";
import { organRoutes } from "./OrganRoutes";
import { receiverRoutes } from "./ReceiverRoutes";
import { userRoutes } from "./UserRoutes";
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

var corsOptions = {
  origin: "*",
};

const routes = Router();

routes.use(cors(corsOptions));
routes.use("/addresses", addressRoutes);
routes.use("/organs", organRoutes);
routes.use("/users", userRoutes);
routes.use("/institutions", institutionRoutes);
routes.use("/login", authRoute);
routes.use("/users/donors", donorRoutes);
routes.use("/users/receivers", receiverRoutes);

routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use(
  "/69ed90c76a11b9a7ee11467ef09503dbec35dbc7be84ba664a098c859416228b",
  adminRoutes
);

export { routes };
