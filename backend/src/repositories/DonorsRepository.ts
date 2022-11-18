import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";
import { Donor } from "../entities/Donor";
import { Organ } from "../entities/Organ";
import { User } from "../entities/User";

const donorsRepo = AppDataSource.getRepository(Donor);
const userRepo = AppDataSource.getRepository(User);
const addressRepo = AppDataSource.getRepository(Address);
export class DonorsRepository {
  getById = async (donor_id: string) => {
    const result = donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("donor.address", "address")
      .where("donor_id = :donor_id", { donor_id })
      .getOne();
    return result;
  };

  getAll = async () => {
    const result = donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("donor.address", "address")
      .getMany();
    return result;
  };

  getDonorByCpf = async (cpf: string) => {
    const result = await donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("donor.address", "address")
      .where("user.cpf = :cpf", { cpf })
      .getOne();
    return result;
  };

  getDonorByEmail = async (email: string) => {
    const result = await donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("donor.address", "address")
      .where("user.email = :email", { email })
      .getOne();
    return result;
  };

  getDonorForAutenticate = async (email: string) => {
    const result = await donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("donor.address", "address")
      .addSelect("user.password")
      .where("user.email = :email", { email })
      .getOne();
    return result;
  };

  createDonor = async (
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
  ) => {
    const passHash = await hash(password, 8);

    const result = donorsRepo.create({
      user: {
        role: "DONOR",
        full_name,
        sex,
        cpf,
        phone,
        email,
        password: passHash,
      },
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

    await donorsRepo.save(result);
    return result;
  };

  updateDonor = async (
    donor_id: string,
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
  ) => {
    const donor = await donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("donor.address", "address")
      .addSelect("user.password")
      .where("donor_id = :donor_id", { donor_id })
      .getOne();

    (donor.user.full_name = full_name ? full_name : donor.user.full_name),
      (donor.user.sex = sex ? sex.toUpperCase() : donor.user.sex),
      (donor.user.cpf = cpf ? cpf : donor.user.cpf),
      (donor.user.phone = phone ? phone : donor.user.phone),
      (donor.user.email = email ? email : donor.user.email),
      (donor.user.password = password
        ? await hash(password, 8)
        : donor.user.password),
      (donor.address.zip_code = zip_code ? zip_code : donor.address.zip_code),
      (donor.address.country = country
        ? country.toUpperCase()
        : donor.address.country),
      (donor.address.uf = uf ? uf.toUpperCase() : donor.address.uf),
      (donor.address.city = city ? city.toUpperCase() : donor.address.city),
      (donor.address.district = district
        ? district.toUpperCase()
        : donor.address.district),
      (donor.address.street = street ? street : donor.address.street),
      (donor.address.number = number ? number : donor.address.number),
      (donor.address.complement = complement
        ? complement
        : donor.address.complement),
      (donor.mother_name = mother_name ? mother_name : donor.mother_name),
      await donorsRepo.save(donor);
    return donor;
  };

  updateDonorForInstitution = async (
    donor_id: string,
    blood_type: string,
    organs: Array<Organ>
  ) => {
    const donor = await donorsRepo.findOne({
      where: { donor_id: donor_id },
    });
    (donor.blood_type = blood_type
      ? blood_type.toUpperCase()
      : donor.blood_type),
      (donor.organs = organs ? organs : donor.organs),
      await donorsRepo.save(donor);
    return donor;
  };

  donorDelete = async (donor_id: string) => {
    const donor = await donorsRepo.findOne({
      where: { donor_id: donor_id },
      relations: { user: true, address: true },
    });
    await donorsRepo.delete(donor);
    await userRepo.delete(donor.user);
    await addressRepo.delete(donor.address);
    return donor;
  };
}
