import { UsersRepository } from "../../repositories/UsersRepository";

export class GetByIdUserService {
  async getById(user_id: string) {
    const repo = new UsersRepository();

    const user = await repo.getById(user_id);

    if (!user) {
      return Error("User does not exists");
    }

    return user;
  }
}
