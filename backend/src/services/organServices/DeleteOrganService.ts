import { OrgansRepository } from "../../repositories/OrgansRepository";

export class DeleteOrganService {
  async deleteOrgan(organ_id: string) {
    const repo = new OrgansRepository();
    const organ = await repo.getById(organ_id)


    if (!organ) {
      throw new Error("Organ does not exists");
    }

    await repo.organDelete(organ_id);
  }
}
