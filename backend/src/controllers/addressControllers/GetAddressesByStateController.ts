import { Request, Response } from "express";
import { GetAddressesByStateService } from "../../services/addressServices/GetAddressesByStateService";

export class GetAddressesByStateController {
  async getByState(req: Request, res: Response) {
    const addressService = new GetAddressesByStateService();

    const { state } = req.params;
    const addresses = await addressService.getByState(state);
    if (!addresses) {
      return res.status(400).json("Addresses does not exists");
    }
    return res.json(addresses);
  }
}
