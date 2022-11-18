import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";
import { Organ } from "../entities/Organ";
import { Receiver } from "../entities/Receiver";
import { User } from "../entities/User";

const receiversRepo = AppDataSource.getRepository(Receiver);
const userRepo = AppDataSource.getRepository(User);
const addressRepo = AppDataSource.getRepository(Address);

export class ReceiversRepository {
  getById = async (receiver_id: string) => {
    const result = receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .where("receiver_id = :receiver_id", { receiver_id })
      .getOne();
    return result;
  };

  getAll = async () => {
    const result = receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .getMany();
    return result;
  };

  getReceiverByCpf = async (cpf: string) => {
    const result = await receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .where("user.cpf = :cpf", { cpf })
      .getOne();
    return result;
  };

  getReceiverByEmail = async (email: string) => {
    const result = await receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .where("user.email = :email", { email })
      .getOne();
    return result;
  };

  getReceiverForAutenticate = async (email: string) => {
    const result = await receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .addSelect("user.password")
      .where("user.email = :email", { email })
      .getOne();
    return result;
  };

  createReceiver = async (
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
    const result = receiversRepo.create({
      user: {
        role: "RECEIVER",
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

    await receiversRepo.save(result);
    return result;
  };

  updateReceiver = async (
    receiver_id: string,
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
    const receiver = await receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .addSelect("user.password")
      .where("receiver_id = :receiver_id", { receiver_id })
      .getOne();

    (receiver.user.full_name = full_name ? full_name : receiver.user.full_name),
      (receiver.user.sex = sex ? sex : receiver.user.sex),
      (receiver.user.cpf = cpf ? cpf : receiver.user.cpf),
      (receiver.user.phone = phone ? phone : receiver.user.phone),
      (receiver.user.email = email ? email : receiver.user.email),
      (receiver.user.password = password
        ? await hash(password, 8)
        : receiver.user.password),
      (receiver.address.zip_code = zip_code
        ? zip_code
        : receiver.address.zip_code),
      (receiver.address.country = country
        ? country.toUpperCase()
        : receiver.address.country),
      (receiver.address.uf = uf ? uf.toUpperCase() : receiver.address.uf),
      (receiver.address.city = city
        ? city.toUpperCase()
        : receiver.address.city),
      (receiver.address.district = district
        ? district.toUpperCase()
        : receiver.address.district),
      (receiver.address.street = street ? street : receiver.address.street),
      (receiver.address.number = number ? number : receiver.address.number),
      (receiver.address.complement = complement
        ? complement
        : receiver.address.complement),
      (receiver.mother_name = mother_name ? mother_name : receiver.mother_name),
      await receiversRepo.save(receiver);
    return receiver;
  };

  updateReceiverForInstitution = async (
    email: string,
    blood_type: string,
    organs: Array<Organ>
  ) => {
    const receiver = await receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .addSelect("user.password")
      .where("user.email = :email", { email })
      .getOne();

    (receiver.blood_type = blood_type
      ? blood_type.toUpperCase()
      : receiver.blood_type),
      (receiver.organs = organs ? organs : receiver.organs),
      await receiversRepo.save(receiver);
    return receiver;
  };

  receiverDelete = async (receiver_id: string) => {
    const receiver = await receiversRepo.findOne({
      where: { receiver_id: receiver_id },
      relations: { user: true, address: true },
    });

    await receiversRepo.delete(receiver);
    await userRepo.delete(receiver.user);
    await addressRepo.delete(receiver.address);
    return receiver;
  };
}
