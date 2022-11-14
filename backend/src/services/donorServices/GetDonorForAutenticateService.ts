import { DonorsRepository } from "../../repositories/DonorsRepository";

export class GetDonorForAutenticateService {
  async getForAuth(email: string) {
    const repo = new DonorsRepository();

    const user = await repo.getDonorForAutenticate(email);

    return user;
  }
}
