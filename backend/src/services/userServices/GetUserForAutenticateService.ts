import { UsersRepository } from "../../repositories/UsersRepository";

export class GetUserForAutenticateService {
  async getForAuth(email: string) {
    const repo = new UsersRepository();

    const user = await repo.getUserForAutenticate(email);

    return user;
  }
}
