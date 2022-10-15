import { Request, Response } from "express";
import { GetByIdAddressService } from "../../services/addressServices/GetByIdAddressService";

export class GetByIdAddressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetByIdAddressService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
