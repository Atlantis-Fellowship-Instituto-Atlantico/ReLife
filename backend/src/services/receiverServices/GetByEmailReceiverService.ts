import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetByEmailReceiverService {
  async getReceiverByEmail(email: string) {
    const repo = new ReceiversRepository();

    const receiver = await repo.getReceiverByEmail(email);

    if (!receiver) {
      throw new Error("Receiver email does not exists");
    }

    return receiver;
  }
}
