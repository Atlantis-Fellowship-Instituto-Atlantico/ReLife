import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class GetByEmailInstitutionService {
  async getInstitutionByEmail(email: string) {
    const repo = new InstitutionRepository();

    const institution = await repo.getInstitutionByEmail(email);

    if (!institution) {
      throw new Error("Institution email does not exists");
    }

    return institution;
  }
}
