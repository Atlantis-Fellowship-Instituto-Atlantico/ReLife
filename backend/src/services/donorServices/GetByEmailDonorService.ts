import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetByEmailDonorService {
  async getDonorByEmail(email: string) {
    const repo = new DonorsRepository();

    const donor = await repo.getDonorByEmail(email);

    if (!donor) {
      throw new Error("Donor email does not exists");
    }

    return donor;
  }
}
