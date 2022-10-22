import { UsersRepositories } from "../../repositories/UsersRepositories";

export class GetAllUsersService {
  async execute() {
    const repo = UsersRepositories;
    const users = await repo
      .createQueryBuilder("users")
      .leftJoinAndSelect("users.role", "role")
      .leftJoinAndSelect("users.address", "address")
      .getMany();

    return users;
  }
}
