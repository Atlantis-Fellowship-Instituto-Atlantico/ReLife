import { UsersRepository } from "../../repositories/UsersRepository";

export class GetByEmailUserService {
  async getByEmail(email: string) {
    const repo = new UsersRepository();

    const user = await repo.getUserByEmail(email);

    return user;
  }
}
