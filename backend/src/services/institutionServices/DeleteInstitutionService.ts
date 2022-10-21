import { InstitutionsRepositories } from "../../repositories/InstitutionsRepositories";

export class DeleteInstitutionService {
  async execute(id: string) {
    const repo = InstitutionsRepositories;

    if (!(await repo.findOneBy({ id: id }))) {
      return Error("User does not exists");
    }

    await repo.delete(id);
  }
}
