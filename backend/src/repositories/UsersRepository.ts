import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";
import { Institution } from "../entities/Institution";
import { Organ } from "../entities/Organ";
import { User } from "../entities/User";

const userRepo = AppDataSource.getRepository(User);
const addressRepo = AppDataSource.getRepository(Address);
const institutionRepo = AppDataSource.getRepository(Institution);
const organRepo = AppDataSource.getRepository(Organ);

export class UsersRepository {
  getById = async (user_id: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.institution", "institution")
      .leftJoinAndSelect("user.organs", "organs")
      .where("user.user_id = :user_id", { user_id })
      .getOne();
    return result;
  };

  getAllUsers = async () => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.institution", "institution")
      .leftJoinAndSelect("user.organs", "organs")
      .getMany();
    return result;
  };

  getAllDonors = async () => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.institution", "institution")
      .leftJoinAndSelect("user.organs", "organs")
      .where("user.role = DONOR")
      .getMany();
    return result;
  };

  getAllReceivers = async () => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.institution", "institution")
      .leftJoinAndSelect("user.organs", "organs")
      .where("user.role = RECEIVER")
      .getMany();
    return result;
  };

  getUserByEmail = async (email: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.institution", "institution")
      .leftJoinAndSelect("user.organs", "organs")
      .where("user.email = :email", { email })
      .getOne();
    return result;
  };

  getUserByCpf = async (cpf: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .leftJoinAndSelect("user.institution", "institution")
      .leftJoinAndSelect("user.organs", "organs")
      .where("user.cpf = :cpf", { cpf })
      .getOne();
    return result;
  };

  getUserForAutenticate = async (email: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .addSelect("user.password")
      .where("user.email = :email", { email })
      .getOne();
    return result;
  };

  createUser = async (
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
    complement: string
  ) => {
    const passHash = await hash(password, 8);
    const result = userRepo.create({
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
    });

    await userRepo.save(result);
    return result;
  };

  updateUser = async (
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
  ) => {
    const user = await userRepo.findOne({
      where: { user_id: user_id },
      relations: { address: true },
    });

    (user.role = role ? role.toUpperCase() : user.role),
      (user.full_name = full_name ? full_name : user.full_name),
      (user.sex = sex ? sex.toUpperCase() : user.sex),
      (user.cpf = cpf ? cpf : user.cpf),
      (user.phone = phone ? phone : user.phone),
      (user.email = email ? email : user.email),
      (user.password = password ? await hash(password, 8) : user.password),
      (user.address.zip_code = zip_code ? zip_code : user.address.zip_code),
      (user.address.country = country
        ? country.toUpperCase()
        : user.address.country),
      (user.address.uf = uf ? uf.toUpperCase() : user.address.uf),
      (user.address.city = city ? city.toUpperCase() : user.address.city),
      (user.address.district = district
        ? district.toUpperCase()
        : user.address.district),
      (user.address.street = street ? street : user.address.street),
      (user.address.number = number ? number : user.address.number),
      (user.address.complement = complement
        ? complement
        : user.address.complement),
      (user.mother_name = mother_name ? mother_name : user.mother_name),
      await userRepo.save(user);
    await addressRepo.save(user.address);
    return user;
  };

  updateUserByInstitution = async (
    cpf: string,
    blood_type?: string,
    institution_name?: string
  ) => {
    const user = await userRepo.findOne({
      where: { cpf: cpf },
      relations: { address: true, organs: true },
    });
    const institution = await institutionRepo.findOne({
      where: { institution_name: institution_name },
    });

    (user.blood_type = blood_type ? blood_type : user.blood_type),
      (user.institution = institution ? institution : user.institution);

    await userRepo.save(user);
    return user;
  };

  updateOrgansUserByInstitution = async (
    cpf: string,
    organs?: Array<Organ>
  ) => {
    const user = await userRepo.findOne({
      where: { cpf: cpf },
      relations: { address: true, organs: true },
    });

    (user.organs = organs ? organs : user.organs), await userRepo.save(user);
    await organRepo.save(organs);
    return user;
  };

  userDelete = async (cpf: string) => {
    const user = await userRepo.findOne({
      where: { cpf: cpf },
      relations: { address: true },
    });

    await userRepo.delete(user);
    await addressRepo.delete(user.address);

    return user;
  };
}
