import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetByCpfDonorService {
  async getDonorByCpf(cpf: string) {
    const repo = new DonorsRepository();

    const donor = await repo.getDonorByCpf(cpf);

    if (!donor) {
      throw new Error("Donor cpf does not exists");
    }

    return donor;
  }
}
