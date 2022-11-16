import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetAllDonorsService {
  async getAllDonors() {
    const repo = new DonorsRepository();
    const donors = await repo.getAll();

    return donors;
  }
}
