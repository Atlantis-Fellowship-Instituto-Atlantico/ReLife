import { OrgansRepositories } from "../../repositories/OrgansRepositories";

export class DeleteOrganService {
  async execute(id: string) {
    const repo = OrgansRepositories;

    if (!(await repo.findOneBy({ id: id }))) {
      return Error("Address does not exists");
    }

    await repo.delete(id);
  }
}
