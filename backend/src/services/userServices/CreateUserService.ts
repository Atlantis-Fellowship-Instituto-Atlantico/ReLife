import { UsersRepository } from "../../repositories/UsersRepository";

export class CreateUserService {
  async createUser(
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
    complement?: string
  ) {
    const usersRepo = new UsersRepository();
    const userExists = await usersRepo.getUserByEmail(email);

    if (userExists && userExists.email === email) {
      throw new Error(`Email already in use.`);
    }
    if (userExists) {
      throw new Error(`Already have user.`);
    }

    try {
      const user = await usersRepo.createUser(
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
    } catch (error) {
      throw new Error(`Error on user creation`);
    }
  }
}
