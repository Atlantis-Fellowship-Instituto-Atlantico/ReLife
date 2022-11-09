import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { ReceiversRepository } from "../../repositories/ReceiversRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class CreateReceiverService {
  async createReceiver(
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
    complement?: string
  ) {
    const receiverRepo = new ReceiversRepository();
    const userRepo = new UsersRepository();
    const institutionRepo = new InstitutionRepository();
    const receiverExists = await userRepo.getUserByEmail(email);
    const institutionExists = await institutionRepo.getInstitutionByEmail(
      email
    );

    if (
      (receiverExists && receiverExists.email === email) ||
      (institutionExists && institutionExists.email === email)
    )
      throw new Error(`Email already in use.`);

    const receiver = await receiverRepo.createReceiver(
      role.toUpperCase(),
      full_name,
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

    return receiver;
  }
}
