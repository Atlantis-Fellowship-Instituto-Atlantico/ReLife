import { Request, Response } from "express";
import { GetAllAddressesService } from "../../services/addressServices/GetAllAddressesService";

export class GetAllAddressesController {
  async getAll(req: Request, res: Response) {
    const addressService = new GetAllAddressesService();

    const addresses = await addressService.getAll();

    return res.json(addresses);
  }
}
