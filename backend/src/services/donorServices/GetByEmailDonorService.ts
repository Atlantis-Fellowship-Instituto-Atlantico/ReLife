import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetByEmailDonorService {
  async getByEmail(email: string) {
    const repo = new DonorsRepository();

    const user = await repo.getDonorByEmail(email);

    return user;
  }
}
