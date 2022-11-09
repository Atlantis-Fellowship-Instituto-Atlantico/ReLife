import { OrgansRepository } from "../../repositories/OrgansRepository";

export class CreateOrganService {
  async createUser(organ_type: string, description: string) {
    const organRepo = new OrgansRepository();
    const organExists = await organRepo.getByDescription(description);

    if (organExists) throw new Error(`Organ already exists.`);

    try {
      const organ = await organRepo.createOrgan(
        organ_type.toUpperCase(),
        description.toUpperCase()
      );

      return organ;
    } catch (error) {
      throw new Error(`Error on user creation`);
    }
  }
}
