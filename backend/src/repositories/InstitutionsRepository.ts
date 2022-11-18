import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";
import { Institution } from "../entities/Institution";

const institutionRepo = AppDataSource.getRepository(Institution);
const addressRepo = AppDataSource.getRepository(Address);

export class InstitutionRepository {
  getById = async (institution_id: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .where("institution_id = :institution_id", { institution_id })
      .getOne();
    return result;
  };

  getAll = async () => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .getMany();
    return result;
  };

  getInstitutionByEmail = async (email: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .where("email = :email", { email })
      .getOne();
    return result;
  };

  getInstitutionByPhone = async (phone: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .where("phone = :phone", { phone })
      .getOne();
    return result;
  };

  getInstitutionForAutenticate = async (email: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .addSelect("institution.password")
      .where("email = :email", { email })
      .getOne();
    return result;
  };

  createInstitution = async (
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
  ) => {
    const passHash = await hash(password, 8);
    const result = institutionRepo.create({
      institution_name,
      responsible_name,
      cnpj,
      phone,
      email,
      password: passHash,
      address: {
        zip_code,
        country,
        uf,
        city,
        district,
        street,
        number,
        complement,
      },
    });

    await institutionRepo.save(result);
    return result;
  };

  updateInstitution = async (
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
  ) => {
    const institution = await institutionRepo.findOne({
      where: { institution_id: institution_id },
      relations: { address: true },
    });

    (institution.institution_name = institution_name
      ? institution_name
      : institution.institution_name),
      (institution.responsible_name = responsible_name
        ? responsible_name
        : institution.responsible_name),
      (institution.cnpj = cnpj ? cnpj : institution.cnpj),
      (institution.phone = phone ? phone : institution.phone),
      (institution.email = email ? email : institution.email),
      (institution.password = password
        ? await hash(password, 8)
        : institution.password),
      (institution.address.zip_code = zip_code
        ? zip_code
        : institution.address.zip_code),
      (institution.address.country = country
        ? country.toUpperCase()
        : institution.address.country),
      (institution.address.uf = uf ? uf.toUpperCase() : institution.address.uf),
      (institution.address.city = city
        ? city.toUpperCase()
        : institution.address.city),
      (institution.address.district = district
        ? district.toUpperCase()
        : institution.address.district),
      (institution.address.street = street
        ? street
        : institution.address.street),
      (institution.address.number = number
        ? number
        : institution.address.number),
      (institution.address.complement = complement
        ? complement
        : institution.address.complement),
      await institutionRepo.save(institution);
    return institution;
  };

  institutionDelete = async (institution_id: string) => {
    const institution = await institutionRepo.findOne({
      where: { institution_id: institution_id },
      relations: { address: true },
    });

    await institutionRepo.delete(institution);
    await addressRepo.delete(institution.address);
    return institution;
  };
}
