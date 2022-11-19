import { AdminRepository } from "../../repositories/AdminRepository";
import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
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
    const adminRepo = new AdminRepository();
    const institutionRepo = new InstitutionRepository();

    const userExists = await usersRepo.getUserByEmail(email);
    const adminExists = await adminRepo.getAdminByEmail(email);
    const institutionExists = await institutionRepo.getInstitutionByEmail(
      email
    );

    if (userExists) {
      throw new Error(`User already in use.`);
    }

    if (
      (userExists && userExists.email == email) ||
      (adminExists && adminExists.email == email) ||
      (institutionExists && institutionExists.email == email)
    ) {
      throw new Error(`Email already in use.`);
    }

    if (userExists && userExists.cpf == cpf) {
      throw new Error(`CPF already in use.`);
    }

    if (
      (userExists && userExists.phone == phone) ||
      (adminExists && adminExists.phone == phone) ||
      (institutionExists && institutionExists.phone == phone)
    ) {
      throw new Error(`Phone already in use.`);
    }

    try {
      const user = await usersRepo.createUser(
        role.toUpperCase(),
        full_name,
        sex.toUpperCase(),
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
      throw new Error(error);
    }
  }
}
