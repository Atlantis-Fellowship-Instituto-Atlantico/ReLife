import { Request, Response } from "express";
import { GetUsersAddressByStateService } from "../../services/addressServices/GetUsersAddressByStateService";

export class GetUsersAddressByStateController {
  async handle(req: Request, res: Response) {
    const { state } = req.params;

    const addressService = new GetUsersAddressByStateService();

    try {
      const addresses = await addressService.getUsersAddressByState(state);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
