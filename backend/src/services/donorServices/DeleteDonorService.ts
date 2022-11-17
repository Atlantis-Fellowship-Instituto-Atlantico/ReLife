import { DonorsRepository } from "../../repositories/DonorsRepository";

export class DeleteDonorService {
  async deleteDonor(donor_id: string) {
    const repo = new DonorsRepository();
    const donor = await repo.getById(donor_id);

    if (!donor) {
      throw new Error("Donor does not exists");
    }

    await repo.donorDelete(donor_id);
  }
}
