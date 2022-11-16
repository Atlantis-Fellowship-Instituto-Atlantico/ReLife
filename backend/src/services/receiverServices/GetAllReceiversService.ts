import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetAllReceiversService {
  async getAllReceivers() {
    const repo = new ReceiversRepository();
    const receivers = await repo.getAll();

    return receivers;
  }
}
