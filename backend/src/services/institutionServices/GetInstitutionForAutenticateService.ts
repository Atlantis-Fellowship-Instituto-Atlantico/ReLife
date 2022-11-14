import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class GetInstitutionForAutenticateService {
  async getForAuth(email: string) {
    const repo = new InstitutionRepository();

    const user = await repo.getForAutenticate(email);

    return user;
  }
}
