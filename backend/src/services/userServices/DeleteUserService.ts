import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteUserService {
  async delete(user_id: string) {
    const repo = new UsersRepository();

    if (!(await repo.getById(user_id))) {
      return Error("User does not exists");
    }

    const user = await repo.userDelete(user_id);

    return user;
  }
}
