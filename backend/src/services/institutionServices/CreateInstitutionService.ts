import { AdminRepository } from "../../repositories/AdminRepository";
import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class CreateInstitutionService {
  async createInstitution(
    institution_name: string,
    responsible_name: string,
    cnpj: string,
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
    if (institutionExists) {
      throw new Error(`Institution already exists.`);
    }

    if (
      institutionExists &&
      institutionExists.institution_name === institution_name.toUpperCase()
    ) {
      throw new Error(`Institution name already in use.`);
    }

    if (
      (userExists && userExists.email == email) ||
      (adminExists && adminExists.email == email) ||
      (institutionExists && institutionExists.email == email)
    ) {
      throw new Error(`Email already in use.`);
    }

    if (institutionExists && institutionExists.cnpj === cnpj) {
      throw new Error(`Institution CNPJ already in use.`);
    }

    if (
      (userExists && userExists.phone == phone) ||
      (adminExists && adminExists.phone == phone) ||
      (institutionExists && institutionExists.phone == phone)
    ) {
      throw new Error(`Phone already in use.`);
    }

    const institution = await institutionRepo.createInstitution(
      institution_name.toUpperCase(),
      responsible_name,
      cnpj,
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

    return institution;
  }
}
