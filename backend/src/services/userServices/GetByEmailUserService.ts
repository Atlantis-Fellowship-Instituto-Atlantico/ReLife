import { UsersRepository } from "../../repositories/UsersRepository";

export class GetByEmailUserService {
  async getUserByEmail(email: string) {
    const repo = new UsersRepository();

    const user = await repo.getUserByEmail(email);

    if(!user){
      throw new Error("User email does not exists")
    }

    return user;
  }
}
