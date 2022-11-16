import { OrgansRepository } from "../../repositories/OrgansRepository";

export class GetByIdOrganService {
  async getOrganById(organ_id: string) {
    const repo = new OrgansRepository();
    const organ = await repo.getById(organ_id);

    if (!organ) {
      throw new Error("Organ does not exists");
    }

    return organ;
  }
}
