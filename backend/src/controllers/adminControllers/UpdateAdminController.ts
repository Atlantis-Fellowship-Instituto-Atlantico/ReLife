import { Request, Response } from "express";
import { UpdateAdminService } from "../../services/adminServices/UpdateAdminService";
import { UpdateUserService } from "../../services/userServices/UpdateUserService";

export class UpdateAdminController {
  async handle(req: Request, res: Response) {
    const { admin_id } = req.params;
    const { phone, email, password } = req.body;

    const service = new UpdateAdminService();

    try {
      const result = await service.updateAdmin(
        admin_id,
        phone,
        email,
        password
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
