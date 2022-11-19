import { AdminRepository } from "../../repositories/AdminRepository";
import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
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
    complement: string,
    mother_name: string
  ) {
    const userRepo = new UsersRepository();
    const adminRepo = new AdminRepository();
    const institutionRepo = new InstitutionRepository();

    const validUser = await userRepo.getById(user_id);
    const adminPhone = await adminRepo.getAdminByPhone(phone);
    const adminEmail = await adminRepo.getAdminByEmail(email);

    const institutionPhone = await institutionRepo.getInstitutionByPhone(phone);
    const institutionEmail = await institutionRepo.getInstitutionByEmail(email);

    if (!validUser) {
      throw new Error("User does not exists");
    }

    if (validUser && validUser.cpf == cpf) {
      throw new Error(`CPF already in use.`);
    }

    if (
      (validUser && validUser.phone == phone) ||
      (adminPhone && adminPhone.phone == phone) ||
      (institutionPhone && institutionPhone.phone == phone)
    ) {
      throw new Error(`Phone already in use.`);
    }

    if (
      (validUser && validUser.email == email) ||
      (adminEmail && adminEmail.email == email) ||
      (institutionEmail && institutionEmail.email == email)
    ) {
      throw new Error(`Email already in use.`);
    }

    const user = await userRepo.updateUser(
      user_id,
      role,
      full_name,
      sex,
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
      complement,
      mother_name
    );
    return user;
  }
}
