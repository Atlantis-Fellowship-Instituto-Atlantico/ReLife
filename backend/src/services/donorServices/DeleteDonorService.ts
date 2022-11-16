import { DonorsRepository } from "../../repositories/DonorsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteDonorService {
  async deleteDonor(donor_id: string) {
    const repo = new DonorsRepository();
    const donor = await repo.getById(donor_id)

    if (!donor) {
      throw new Error("Donor does not exists");
    }

    await repo.donorDelete(donor_id);
  }
}
