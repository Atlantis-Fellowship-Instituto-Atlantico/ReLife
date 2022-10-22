import { InstitutionsRepositories } from "../../repositories/InstitutionsRepositories";

export class GetByIdInstitutionService {
  async execute(id: string) {
    const repo = InstitutionsRepositories;
    const institution = await repo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.role", "role")
      .leftJoinAndSelect("institution.address", "address")
      .where("institution.id = :id", { id })
      .getMany();

    if (!institution) {
      return Error("Address does not exists");
    }

    return institution;
  }
}
