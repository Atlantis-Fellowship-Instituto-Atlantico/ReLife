import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateUserService {
  async updateUser(
    user_id: string,
    role: string,
    full_name: string,
    cpf: string,
    phone: string,
    email: string,
    password: string,
    zip_code: string,
    country: string,
    uf: string,
    city: string,
    district: string,
    street: string,
    number: string,
    complement: string
  ) {
    const userRepo = new UsersRepository();

    const validUser = await userRepo.getById(user_id);

    if (!validUser) {
      return new Error("User does not exists");
    }

    try {
      const user = await userRepo.updateUser(
        user_id,
        role,
        full_name,
        cpf,
        phone,
        email,
        password,
        zip_code,
        country,
        uf,
        city,
        district,
        street,
        number,
        complement
      );
      return user;
    } catch (err) {
      throw Error("Error on update user");
    }
  }
}
