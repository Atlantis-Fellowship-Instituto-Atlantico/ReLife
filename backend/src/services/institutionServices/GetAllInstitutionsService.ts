import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class GetAllInstitutionsService {
  async getAllInstitutions() {
    const repo = new InstitutionRepository();
    const institutions = await repo.getAll();

    return institutions;
  }
}
