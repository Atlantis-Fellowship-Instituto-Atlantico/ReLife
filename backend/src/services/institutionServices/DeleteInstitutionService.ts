import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class DeleteInstitutionService {
  async delete(institution_id: string) {
    const repo = new InstitutionRepository();

    if (!(await repo.getById(institution_id))) {
      return Error("User does not exists");
    }

    const institution = await repo.userDelete(institution_id);

    return institution;
  }
}
