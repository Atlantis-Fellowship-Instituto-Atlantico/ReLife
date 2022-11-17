import { DonorsRepository } from "../../repositories/DonorsRepository";
import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class CreateDonorService {
  async createDonor(
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
    const donorRepo = new DonorsRepository();
    const userRepo = new UsersRepository();
    const institutionRepo = new InstitutionRepository();
    const donorExists = await userRepo.getUserByEmail(email);
    const institutionExists = await institutionRepo.getInstitutionByEmail(
      email
    );

    if (
      (donorExists && donorExists.email === email) ||
      (institutionExists && institutionExists.email === email)
    ) {
      throw new Error(`Email already in use.`);
    }

    const donor = await donorRepo.createDonor(
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

    return donor;
  }
}
