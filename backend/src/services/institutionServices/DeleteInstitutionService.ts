import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class DeleteInstitutionService {
  async deleteInstitution(institution_id: string) {
    const repo = new InstitutionRepository();
    const institution = await repo.getById(institution_id);

    if (!institution) {
      throw new Error("Institution does not exists");
    }

    await repo.userDelete(institution_id);
  }
}
