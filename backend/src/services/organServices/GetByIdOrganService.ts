import { OrgansRepository } from "../../repositories/OrgansRepository";

export class GetByIdOrganService {
  async getById(organ_id: string) {
    const repo = new OrgansRepository();
    const organ = await repo.getById(organ_id);

    if (!organ) {
      return Error("Address does not exists");
    }

    return organ;
  }
}
