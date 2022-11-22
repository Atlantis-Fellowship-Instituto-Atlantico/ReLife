import bodyParser = require("body-parser");
import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./database/Index";
import { routes } from "./routes/Routes";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(bodyParser.json());

    app.use(routes);

    app.use((err: Error, request: Request, response: Response) => {
      if (err instanceof Error) {
        return response.status(400).json({
          error: err.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    });
    app.listen(3333, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
