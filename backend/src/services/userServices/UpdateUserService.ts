import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateUserService {
  async updateUser(
    user_id: string,
    role: string,
    full_name: string,
    sex: string,
    cpf: string,
    phone: string,
    email: string,
    password: string
  ) {
    const userRepo = new UsersRepository();

    const validUser = await userRepo.getById(user_id);

    if (!validUser) {
      throw new Error("User does not exists");
    }

    const user = await userRepo.updateUser(
      user_id,
      role.toUpperCase(),
      full_name,
      sex,
      cpf,
      phone,
      email,
      password
    );
    return user;
  }
}
