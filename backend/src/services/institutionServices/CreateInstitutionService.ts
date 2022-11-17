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
    const institutionRepo = new InstitutionRepository();
    const userRepo = new UsersRepository();
    const institutionExists = await institutionRepo.getInstitutionByEmail(
      email
    );
    const userExists = await userRepo.getUserByEmail(email);

    if (
      (institutionExists && institutionExists.email === email) ||
      (userExists && userExists.email === email)
    ) {
      throw new Error(`Email already in use.`);
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
