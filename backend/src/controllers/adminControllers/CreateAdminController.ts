import { Request, Response } from "express";
import { CreateAdminService } from "../../services/adminServices/CreateAdminService";

export class CreateAdminController {
  async handle(req: Request, res: Response) {
    const { phone, email, password } = req.body;

    const createService = new CreateAdminService();

    try {
      const result = await createService.createAdmin(phone, email, password);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
