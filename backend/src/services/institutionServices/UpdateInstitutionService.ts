import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateInstitutionService {
  async updateInstitution(
    institution_id: string,
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
    complement: string
  ) {
    const institutionRepo = new InstitutionRepository();
    const userRepo = new UsersRepository();

    const validInstitution = await institutionRepo.getById(institution_id);
    const userExists = await userRepo.getUserByEmail(email);

    if (!validInstitution) {
      throw new Error("Institution does not exists");
    }

    if (
      (validInstitution && validInstitution.email === email) ||
      (userExists && userExists.email === email)
    ) {
      throw new Error(`Email already in use.`);
    }
    if (
      validInstitution &&
      validInstitution.institution_name === institution_name
    ) {
      throw new Error(`Institution name already in use.`);
    }
    if (validInstitution && validInstitution.cnpj === cnpj) {
      throw new Error(`Institution CNPJ already in use.`);
    }
    if (
      (validInstitution && validInstitution.phone === phone) ||
      (userExists && userExists.phone === phone)
    ) {
      throw new Error(`Phone already in use.`);
    }

    const institution = await institutionRepo.updateInstitution(
      institution_id,
      institution_name,
      responsible_name,
      cnpj,
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
    return institution;
  }
}
