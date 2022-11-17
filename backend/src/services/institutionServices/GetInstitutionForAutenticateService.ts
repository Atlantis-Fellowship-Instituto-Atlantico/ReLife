import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class GetInstitutionForAutenticateService {
  async getInstitutionForAuth(email: string) {
    const repo = new InstitutionRepository();
    const institution = await repo.getForAutenticate(email);

    return institution;
  }
}
