import { DonorsRepository } from "../../repositories/DonorsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class GetByIdDonorService {
  async getById(donor_id: string) {
    const repo = new DonorsRepository();

    const donor = await repo.getById(donor_id);

    if (!donor) {
      return Error("User does not exists");
    }

    return donor;
  }
}
