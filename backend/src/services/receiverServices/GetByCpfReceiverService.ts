import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class GetByCpfReceiverService {
  async getReceiverByCpf(cpf: string) {
    const repo = new ReceiversRepository();

    const receiver = await repo.getReceiverByCpf(cpf);

    if(!receiver){
      throw new Error("Receiver cpf does not exists");
    }

    return receiver;
  }
}
