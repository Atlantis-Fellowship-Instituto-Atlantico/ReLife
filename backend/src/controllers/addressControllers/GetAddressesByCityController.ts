import { Request, Response } from "express";
import { GetAddressesByCityService } from "../../services/addressServices/GetAddressesByCityService";

export class GetAddressesByCityController {
  async getByCity(req: Request, res: Response) {
    const { city } = req.params;

    const addressService = new GetAddressesByCityService();

    

    try {
      const addresses = await addressService.getAddressByCity(city);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message)
    }
    
  }
}
