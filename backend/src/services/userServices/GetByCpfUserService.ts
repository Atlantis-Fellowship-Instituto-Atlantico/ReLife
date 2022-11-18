import { UsersRepository } from "../../repositories/UsersRepository";

export class GetByCpfUserService {
  async getUserByCpf(cpf: string) {
    const repo = new UsersRepository();

    const user = await repo.getUserByCpf(cpf);

    if (!user) {
      throw new Error("User CPF does not exists");
    }

    return user;
  }
}
