import { UsersRepository } from "../../repositories/UsersRepository";

export class GetUserForAutenticateService {
  async getUserForAuth(email: string) {
    const repo = new UsersRepository();

    const user = await repo.getUserForAutenticate(email);

    if(!user){
      throw new Error("User email does not exists")
    }

    return user;
  }
}
