import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./database/DataSource";
import { Organ } from "./entities/Organs";

AppDataSource.initialize()
  .then(() => {
    const organsRepository = AppDataSource.getRepository(Organ);

    const app = express();

    app.get("/", async (req: Request, res: Response) => {
      res.json({
        status: "working",
      });
    });

    app.get("/organs", async (req: Request, res: Response) => {
      const organs = await organsRepository.find();

      res.json(organs);
    });

    app.listen(3000);
  })
  .catch((error) => console.log(error));
