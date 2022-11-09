import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class GetByEmailInstitutionService {
  async getByEmail(email: string) {
    const repo = new InstitutionRepository();

    const user = await repo.getInstitutionByEmail(email);

    return user;
  }
}
