import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetByIdReceiverService {
  async getById(receiver_id: string) {
    const repo = new ReceiversRepository();

    const receiver = await repo.getById(receiver_id);

    if (!receiver) {
      return Error("User does not exists");
    }

    return receiver;
  }
}
