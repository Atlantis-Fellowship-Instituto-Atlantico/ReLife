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
      password,
      zip_code,
      country.toUpperCase(),
      uf.toUpperCase(),
      city.toUpperCase(),
      district.toUpperCase(),
      street,
      number,
      complement
    );
    return user;
  }
}
