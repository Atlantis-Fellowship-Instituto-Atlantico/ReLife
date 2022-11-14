import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class DeleteReceiverService {
  async delete(receiver_id: string) {
    const repo = new ReceiversRepository();

    if (!(await repo.getById(receiver_id))) {
      return Error("Donor does not exists");
    }

    const receiver = await repo.receiverDelete(receiver_id);

    return receiver;
  }
}
