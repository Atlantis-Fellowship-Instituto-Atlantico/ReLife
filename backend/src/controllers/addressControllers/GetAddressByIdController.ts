import { Request, Response } from "express";
import { GetAddressByIdService } from "../../services/addressServices/GetAddressByIdService";

export class GetAddressByIdController {
  async getById(req: Request, res: Response) {
    const addressService = new GetAddressByIdService();

    const { address_id } = req.params;
    const address = await addressService.getById(address_id);
    if (!address) {
      return res.status(400).json("Address does not exists");
    }
    return res.json(address);
  }
}
