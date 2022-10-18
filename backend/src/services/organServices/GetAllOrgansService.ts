import { OrgansRepositories } from "../../repositories/OrgansRepositories";

export class GetAllOrgansService {
  async execute() {
    const orgarnRepository = OrgansRepositories;
    const organs = await orgarnRepository.find();

    return organs;
  }
}
