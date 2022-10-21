import { UsersRepositories } from "../../repositories/UsersRepositories";

export class GetByIdUserService {
  async execute(id: string) {
    const repo = UsersRepositories;
    const user = await repo.findOneBy({ id: id });

    if (!user) {
      return Error("Address does not exists");
    }

    return user;
  }
}
