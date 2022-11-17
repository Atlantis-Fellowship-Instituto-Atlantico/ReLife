import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetDonorForAutenticateService {
  async getDonorForAuth(email: string) {
    const repo = new DonorsRepository();

    const donor = await repo.getDonorForAutenticate(email);

    if (!donor) {
      throw new Error("Donor email does not exists");
    }

    return donor;
  }
}
