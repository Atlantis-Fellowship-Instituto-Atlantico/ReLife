import { UsersRepositories } from "../../repositories/UsersRepositories";

export class DeleteUserService {
  async execute(id: string) {
    const repo = UsersRepositories;

    if (!(await repo.findOneBy({ id: id }))) {
      return Error("User does not exists");
    }

    await repo.delete(id);
  }
}
