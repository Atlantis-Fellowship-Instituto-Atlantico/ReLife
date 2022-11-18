import { Request, Response } from "express";
import { GetUsersAddressByCityService } from "../../services/addressServices/GetUsersAddressByCityService";

export class GetUsersAddressByCityController {
  async handle(req: Request, res: Response) {
    const { city } = req.params;

    const addressService = new GetUsersAddressByCityService();

    try {
      const addresses = await addressService.getUsersAddressByCity(city);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
