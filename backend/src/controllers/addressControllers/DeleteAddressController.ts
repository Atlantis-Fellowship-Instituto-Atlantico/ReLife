import { Request, Response } from "express";
import { DeleteAddressSerive } from "../../services/addressServices/DeleteAddressSerive";

export class DeleteAddressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteAddressSerive();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
