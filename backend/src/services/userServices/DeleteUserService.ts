import { UsersRepository } from "../../repositories/UsersRepository";

export class DeleteUserService {
  async deleteUser(user_id: string) {
    const repo = new UsersRepository();
    const user = await repo.getById(user_id);

    if (!user) {
      throw new Error("User does not exists");
    }

    await repo.userDelete(user_id);
  }
}
