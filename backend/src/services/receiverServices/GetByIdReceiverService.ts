import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetByIdReceiverService {
  async getById(receiver_id: string) {
    const repo = new ReceiversRepository();

    const receiver = await repo.getById(receiver_id);

    if (!receiver) {
      throw new Error("Receiver does not exists");
    }

    return receiver;
  }
}
