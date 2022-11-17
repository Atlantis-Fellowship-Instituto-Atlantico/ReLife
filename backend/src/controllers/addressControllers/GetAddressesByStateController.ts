import { Request, Response } from "express";
import { GetAddressesByStateService } from "../../services/addressServices/GetAddressesByStateService";

export class GetAddressesByStateController {
  async handle(req: Request, res: Response) {
    const { state } = req.params;

    const addressService = new GetAddressesByStateService();

    try {
      const addresses = await addressService.getAddressByState(state);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
