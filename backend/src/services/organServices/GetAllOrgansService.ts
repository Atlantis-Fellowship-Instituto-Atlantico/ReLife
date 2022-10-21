import { OrgansRepositories } from "../../repositories/OrgansRepositories";

export class GetAllOrgansService {
  async execute() {
    const organRepository = OrgansRepositories;
    const organs = await organRepository.find();

    return organs;
  }
}
