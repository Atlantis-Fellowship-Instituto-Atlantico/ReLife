import { Request, Response } from "express";
import { GetAddressByIdService } from "../../services/addressServices/GetAddressByIdService";

export class GetAddressByIdController {
  async handle(req: Request, res: Response) {
    const { address_id } = req.params;

    const addressService = new GetAddressByIdService();

    try {
      const address = await addressService.getAddressById(address_id);
      return res.status(200).json(address);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
