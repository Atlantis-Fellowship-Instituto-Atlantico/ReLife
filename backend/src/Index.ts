import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./database/DataSource";
import { Donor } from "./entities/Donor";


// Testando Entidade "Donor"
AppDataSource.initialize()
  .then(() => {
    const donorsRepository = AppDataSource.getRepository(Donor);

    const app = express();

    app.get("/", async (req: Request, res: Response) => {
      res.json({
        status: "working",
      });
    });

    app.get("/donors", async (req: Request, res: Response) => {
      const donors = await donorsRepository.find();

      res.status(200).json({mensagem: 'Testing entity Donor'})
    });

    app.listen(3000);
  })
  .catch((error) => console.log(error));
