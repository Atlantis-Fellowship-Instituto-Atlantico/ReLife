import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";
import { Organ } from "../entities/Organ";
import { User } from "../entities/User";

const userRepo = AppDataSource.getRepository(User);
const addressRepo = AppDataSource.getRepository(Address);

export class UsersRepository {
  getById = async (user_id: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("user_id = :user_id", { user_id })
      .getOne();
    return result;
  };

  getAllUsers = async () => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .getMany();
    return result;
  };

  getAllDonors = async () => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("role = DONOR")
      .getMany();
    return result;
  };

  getAllReceivers = async () => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("role = RECEIVER")
      .getMany();
    return result;
  };

  getUserByEmail = async (email: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("email = :email", { email })
      .getOne();
    return result;
  };

  getUserByCpf = async (cpf: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("cpf = :cpf", { cpf })
      .getOne();
    return result;
  };

  getUserForAutenticate = async (email: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .addSelect("user.password")
      .where("email = :email", { email })
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
    blood_type: string,
    organs: Organ[]
  ) => {
    const user = await userRepo.findOne({
      where: { cpf: cpf },
      relations: { address: true },
    });
    (user.blood_type = blood_type ? blood_type : user.blood_type),
      (user.organs = organs ? organs : user.organs),
      await userRepo.save(user);
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
