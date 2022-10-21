import { InstitutionsRepositories } from "../../repositories/InstitutionsRepositories";

export class GetAllInstitutionsService {
  async execute() {
    const repo = InstitutionsRepositories;
    const users = await repo.find();

    return users;
  }
}
