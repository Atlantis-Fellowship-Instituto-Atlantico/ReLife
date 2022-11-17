import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetReceiverForAutenticateService {
  async getForAuth(email: string) {
    const repo = new ReceiversRepository();

    const receiver = await repo.getReceiverForAutenticate(email);

    if (!receiver) {
      throw new Error("Receiver email does not exists");
    }

    return receiver;
  }
}
