import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./database/DataSource";
import { Orgaos } from "./entities/Orgaos";

AppDataSource.initialize()
  .then(() => {
    const organsRepository = AppDataSource.getRepository(Orgaos);

    const app = express();

    app.get("/", async (req: Request, res: Response) => {
      res.json({
        status: "working",
      });
    });

    app.get("/orgaos", async (req: Request, res: Response) => {
      const orgaos = await organsRepository.find();

      res.json(orgaos);
    });

    app.get("/orgaos/:id_orgao", async (req: Request, res: Response) => {
      const orgaoid = await organsRepository.findOne({
        where: {
          id_orgao: parseInt(req.params.id_orgao),
        },
      });

      res.json(orgaoid);
    });

    app.listen(3000);
  })
  .catch((error) => console.log(error));
