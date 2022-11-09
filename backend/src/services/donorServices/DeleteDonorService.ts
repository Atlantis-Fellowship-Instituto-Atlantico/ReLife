import { DonorsRepository } from "../../repositories/DonorsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteDonorService {
  async delete(donor_id: string) {
    const repo = new DonorsRepository();

    if (!(await repo.getById(donor_id))) {
      return Error("Donor does not exists");
    }

    const donor = await repo.donorDelete(donor_id);

    return donor;
  }
}
