import { InstitutionsRepositories } from "../../repositories/InstitutionsRepositories";

export class GetAllInstitutionsService {
  async execute() {
    const repo = InstitutionsRepositories;
    const institutions = await repo
      .createQueryBuilder("institutions")
      .leftJoinAndSelect("institutions.role", "role")
      .leftJoinAndSelect("institutions.address", "address")
      .getMany();

    return institutions;
  }
}
