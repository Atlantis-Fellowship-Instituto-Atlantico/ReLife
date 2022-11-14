import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetReceiverForAutenticateService {
  async getForAuth(email: string) {
    const repo = new ReceiversRepository();

    const user = await repo.getReceiverForAutenticate(email);

    return user;
  }
}
