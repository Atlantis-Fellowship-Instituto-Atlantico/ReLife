import { OrgansRepository } from "../../repositories/OrgansRepository";

export class DeleteOrganService {
  async delete(organ_id: string) {
    const repo = new OrgansRepository();

    if (!(await repo.getById(organ_id))) {
      return Error("Organ does not exists");
    }

    await repo.organDelete(organ_id);
  }
}
