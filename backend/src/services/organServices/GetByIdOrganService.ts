import { OrgansRepositories } from "../../repositories/OrgansRepositories";

export class GetByIdOrganService {
  async execute(id: string) {
    const repo = OrgansRepositories;
    const organ = await repo.findOneBy({ id: id });

    if (!organ) {
      return Error("Address does not exists");
    }

    return organ;
  }
}
