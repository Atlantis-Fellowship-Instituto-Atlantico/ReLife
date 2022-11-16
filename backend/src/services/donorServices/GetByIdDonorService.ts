import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetByIdDonorService {
  async getDonorById(donor_id: string) {
    const repo = new DonorsRepository();

    const donor = await repo.getById(donor_id);

    if (!donor) {
      throw new Error("Donor does not exists");
    }

    return donor;
  }
}
