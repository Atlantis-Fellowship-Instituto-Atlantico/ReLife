import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class DeleteReceiverService {
  async deleteReceiver(receiver_id: string) {
    const repo = new ReceiversRepository();
    const receiver = await repo.getById(receiver_id)

    if (!receiver) {
      throw new Error("Receiver does not exists");
    }

    await repo.receiverDelete(receiver_id);
  }
}
