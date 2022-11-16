import { Request, Response } from "express";
import { GetByCpfDonorService } from "../../services/donorServices/GetByCpfDonorService";

export class GetDonorByCpfController {
  async handle(req: Request, res: Response) {
    const { cpf } = req.params;

    const service = new GetByCpfDonorService();

    try {
      const result = await service.getDonorByCpf(cpf);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message)
    }
    
  }
}
