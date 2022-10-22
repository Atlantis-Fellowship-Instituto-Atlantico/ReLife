import { User } from "../../entities/User";
import { UsersRepositories } from "../../repositories/UsersRepositories";

export class GetByIdUserService {
  async execute(id: string) {
    const repo = UsersRepositories;

    const user = await repo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .leftJoinAndSelect("user.address", "address")
      .where("user.id = :id", { id })
      .getOne();

    if (!user) {
      return Error("Address does not exists");
    }

    return user;
  }
}
