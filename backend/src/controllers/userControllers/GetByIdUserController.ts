import { Request, Response } from "express";
import { GetByIdUserService } from "../../services/userServices/GetByIdUserService";

export class GetByIdUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetByIdUserService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
