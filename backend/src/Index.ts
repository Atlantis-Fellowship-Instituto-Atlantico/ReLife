import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./database/DataSource";
import { Administrator } from "./entities/Administrators";
import { Person } from "./entities/People";


// Testando Entidade "Administrators"
AppDataSource.initialize()
  .then(() => {
    const administratorsRepository = AppDataSource.getRepository(Administrator);

    const app = express();

    app.get("/", async (req: Request, res: Response) => {
      res.json({
        status: "working",
      });
    });

    app.get("/administrators", async (req: Request, res: Response) => {
      const administrators = await administratorsRepository.find();

      res.status(200).json({mensagem: 'Testing entity Administrator'})
    });

    app.listen(3000);
  })
  .catch((error) => console.log(error));
