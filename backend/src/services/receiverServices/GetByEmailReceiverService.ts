import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetByEmailReceiverService {
  async getByEmail(email: string) {
    const repo = new ReceiversRepository();

    const user = await repo.getReceiverByEmail(email);

    return user;
  }
}
