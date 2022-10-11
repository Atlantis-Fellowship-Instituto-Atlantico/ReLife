import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./database/DataSource";
import { User } from "./entities/User";


// Testando Entidade "User"
AppDataSource.initialize()
  .then(() => {
    const usersRepository = AppDataSource.getRepository(User);

    const app = express();

    app.get("/", async (req: Request, res: Response) => {
      res.json({
        status: "working",
      });
    });

    app.get("/users", async (req: Request, res: Response) => {
      const users = await usersRepository.find();

      res.status(200).json({mensagem: 'Testing entity User'})
    });

    app.listen(3000);
  })
  .catch((error) => console.log(error));
