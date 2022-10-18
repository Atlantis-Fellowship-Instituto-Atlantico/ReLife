import { OrgansRepositories } from "../../repositories/OrgansRepositories";

type OrganUpdateRequest = {
  id: string;
  organ_type: string;
  description: string;
};

export class UpdateOrganService {
  async execute({ id, organ_type, description }: OrganUpdateRequest) {
    const repo = OrgansRepositories;

    const organ = await repo.findOneBy({
      id: id,
    });

    if (!organ) {
      return new Error("Address does not exists");
    }

    organ.organ_type = organ_type ? organ_type : organ.organ_type;
    organ.description = description ? description : organ.description;

    await repo.save(organ);
    return organ;
  }
}
