import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Donor } from "../entities/Donor";

const donorsRepo = AppDataSource.getRepository(Donor);

export class DonorsRepository {
  getById = async (donor_id: string) => {
    const result = donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("user.address", "address")
      .where("donor.donor_id = :donor_id", { donor_id })
      .getOne();
    return result;
  };

  getAll = async () => {
    const result = donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("user.address", "address")
      .getMany();
    return result;
  };

  getDonorByCpf = async (cpf: string) => {
    const result = await donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("user.address", "address")
      .where("donor.user.cpf = :cpf", { cpf })
      .getOne();
    return result;
  };

  getDonorByEmail = async (email: string) => {
    const result = await donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("user.address", "address")
      .where("donor.user.email = :email", { email })
      .getOne();
    return result;
  };

  getDonorForAutenticate = async (email: string) => {
    const result = await donorsRepo
      .createQueryBuilder("donor")
      .leftJoinAndSelect("donor.user", "user")
      .leftJoinAndSelect("user.address", "address")
      .addSelect("donor.user.password")
      .where("donor.user.email = :email", { email })
      .getOne();
    return result;
  };

  createDonor = async (
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
  ) => {
    const passHash = await hash(password, 8);
    const result = donorsRepo.create({
      user: {
        role,
        full_name,
        sex,
        cpf,
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
      },
    });

    await donorsRepo.save(result);
    return result;
  };

  updateDonor = async (
    donor_id: string,
    role: string,
    full_name: string,
    sex:string,
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
    const donor = await donorsRepo.findOne({
      where: { donor_id: donor_id },
      relations: { user: true },
    });

    (donor.user.role = role ? role.toUpperCase() : donor.user.role),
      (donor.user.full_name = full_name ? full_name : donor.user.full_name),
      (donor.user.sex = sex ? sex : donor.user.sex),
      (donor.user.cpf = cpf ? cpf : donor.user.cpf),
      (donor.user.phone = phone ? phone : donor.user.phone),
      (donor.user.email = email ? email : donor.user.email),
      (donor.user.password = password
        ? await hash(password, 8)
        : donor.user.password),
      (donor.user.address.zip_code = zip_code
        ? zip_code
        : donor.user.address.zip_code),
      (donor.user.address.country = country
        ? country.toUpperCase()
        : donor.user.address.country),
      (donor.user.address.uf = uf ? uf.toUpperCase() : donor.user.address.uf),
      (donor.user.address.city = city
        ? city.toUpperCase()
        : donor.user.address.city),
      (donor.user.address.district = district
        ? district.toUpperCase()
        : donor.user.address.district),
      (donor.user.address.street = street ? street : donor.user.address.street),
      (donor.user.address.number = number ? number : donor.user.address.number),
      (donor.user.address.complement = complement
        ? complement
        : donor.user.address.complement),
      (donor.mother_name = mother_name ? mother_name : donor.mother_name),
      await donorsRepo.save(donor);
    return donor;
  };

  //criar update somente para instituição

  donorDelete = async (donor_id: string) => {
    const donor = await donorsRepo.findOne({
      where: { donor_id: donor_id },
      relations: { user: true },
    });

    donor.user.isActive = false;

    donorsRepo.save(donor);
    return donor;
  };
}
