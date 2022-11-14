import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetAllDonorsService {
  async getAllDonors() {
    const repo = new DonorsRepository();
    const users = await repo.getAll();

    return users;
  }
}
