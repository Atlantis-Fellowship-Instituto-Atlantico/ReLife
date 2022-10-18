import { OrgansRepositories } from "../../repositories/OrgansRepositories";

type OrganRequest = {
  organ_type: string;
  description: string;
};

export class CreateOrganService {
  async execute({ organ_type, description }: OrganRequest) {
    const organRepository = OrgansRepositories;

    const organ = organRepository.create({
      organ_type,
      description,
    });

    await organRepository.save(organ);

    return organ;
  }
}
