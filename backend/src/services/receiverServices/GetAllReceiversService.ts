import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetAllReceiversService {
  async getAllReceivers() {
    const repo = new ReceiversRepository();
    const users = await repo.getAll();

    return users;
  }
}
