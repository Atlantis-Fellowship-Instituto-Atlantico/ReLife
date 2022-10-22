import { OrgansRepositories } from "../../repositories/OrgansRepositories";

export class GetAllOrgansService {
  async execute() {
    const repo = OrgansRepositories;
    const organs = await repo.find();

    return organs;
  }
}
