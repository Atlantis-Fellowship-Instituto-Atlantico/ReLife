import { OrgansRepository } from "../../repositories/OrgansRepository";

export class UpdateOrganService {
  async updateOrgan(organ_id: string, organ_type: string, description: string) {
    const repo = new OrgansRepository();

    const validOrgan = await repo.getById(organ_id);

    if (!validOrgan) {
      throw new Error("Organ does not exists");
    }

    const organ = await repo.updateOrgan(organ_id, organ_type, description);
    
    return organ;
    
  }
}
