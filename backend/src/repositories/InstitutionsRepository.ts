import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Institution } from "../entities/Institution";

const institutionRepo = AppDataSource.getRepository(Institution);

export class InstitutionRepository {
  getById = async (institution_id: string) => {
    const result = institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .where("institution.institution_id = :institution_id", { institution_id })
      .andWhere("institution.isActive = true")
      .getOne();
    return result;
  };

  getAll = async () => {
    const result = institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .getMany();
    return result;
  };

  getInstitutionByEmail = async (email: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .where("institution.email = :email", { email })
      .getOne();
    return result;
  };

  getForAutenticate = async (email: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .addSelect("institution.password")
      .leftJoinAndSelect("institution.address", "address")
      .where("institution.email = :email", { email })
      .andWhere("institution.isActive = true")
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

  userDelete = async (institution_id: string) => {
    const institution = institutionRepo
      .createQueryBuilder()
      .update(Institution)
      .set({ isActive: false })
      .where({ institution_id: institution_id })
      .execute();

    return institution;
  };
}
