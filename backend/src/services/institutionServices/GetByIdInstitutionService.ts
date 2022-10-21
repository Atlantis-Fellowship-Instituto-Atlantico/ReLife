import { InstitutionsRepositories } from "../../repositories/InstitutionsRepositories";

export class GetByIdInstitutionService {
  async execute(id: string) {
    const repo = InstitutionsRepositories;
    const institution = await repo.findOneBy({ id: id });

    if (!institution) {
      return Error("Address does not exists");
    }

    return institution;
  }
}
