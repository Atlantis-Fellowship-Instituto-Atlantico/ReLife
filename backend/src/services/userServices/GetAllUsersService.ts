import { UsersRepositories } from "../../repositories/UsersRepositories";

export class GetAllUsersService {
  async execute() {
    const repo = UsersRepositories;
    const users = await repo.find();

    return users;
  }
}
