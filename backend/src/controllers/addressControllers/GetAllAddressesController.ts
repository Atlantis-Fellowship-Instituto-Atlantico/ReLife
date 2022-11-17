import { Request, Response } from "express";
import { GetAllAddressesService } from "../../services/addressServices/GetAllAddressesService";

export class GetAllAddressesController {
  async handle(req: Request, res: Response) {
    const addressService = new GetAllAddressesService();

    try {
      const addresses = await addressService.getAllAddresses();
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
