import { Request, Response } from "express";
import { GetAllAddressesService } from "../../services/addressServices/GetAllAddressesService";

export class GetAllAddressesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllAddressesService();

    const addresses = await service.execute();

    return response.json(addresses);
  }
}
