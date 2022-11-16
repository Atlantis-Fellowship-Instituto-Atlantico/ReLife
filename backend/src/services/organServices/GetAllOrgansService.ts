import { OrgansRepository } from "../../repositories/OrgansRepository";

export class GetAllOrgansService {
  async getAllOrgans() {
    const repo = new OrgansRepository();
    const organs = await repo.getAll();

    return organs;
  }
}
