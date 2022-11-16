import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class GetInstitutionForAutenticateService {
  async getInstitutionForAuth(email: string) {
    const repo = new InstitutionRepository();

    const institution = await repo.getForAutenticate(email);

    if (!institution) {
      throw new Error("Institution email does not exists");
    }

    return institution;
  }
}
