import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Receiver } from "../entities/Receiver";

const receiversRepo = AppDataSource.getRepository(Receiver);

export class ReceiversRepository {
  getById = async (receiver_id: string) => {
    const result = receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("user.address", "address")
      .where("receiver.receiver_id = :receiver_id", { receiver_id })
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
      .where("receiver.user.cpf = :cpf", { cpf })
      .getOne();
    return result;
  };

  getReceiverByEmail = async (email: string) => {
    const result = await receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .where("receiver.user.email = :email", { email })
      .getOne();
    return result;
  };

  getReceiverForAutenticate = async (email: string) => {
    const result = await receiversRepo
      .createQueryBuilder("receiver")
      .leftJoinAndSelect("receiver.user", "user")
      .leftJoinAndSelect("receiver.address", "address")
      .addSelect("receiver.user.password")
      .where("receiver.user.email = :email", { email })
      .getOne();
    return result;
  };

  createReceiver = async (
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
    complement?: string
  ) => {
    const passHash = await hash(password, 8);
    const result = receiversRepo.create({
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

    await receiversRepo.save(result);
    return result;
  };

  updateReceiver = async (
    receiver_id: string,
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
    const receiver = await receiversRepo.findOne({
      where: { receiver_id: receiver_id },
      relations: { user: true },
    });

    (receiver.user.role = role ? role.toUpperCase() : receiver.user.role),
      (receiver.user.full_name = full_name
        ? full_name
        : receiver.user.full_name),
      (receiver.user.sex = sex ? sex : receiver.user.sex),
      (receiver.user.cpf = cpf ? cpf : receiver.user.cpf),
      (receiver.user.phone = phone ? phone : receiver.user.phone),
      (receiver.user.email = email ? email : receiver.user.email),
      (receiver.user.password = password
        ? await hash(password, 8)
        : receiver.user.password),
      (receiver.user.address.zip_code = zip_code
        ? zip_code
        : receiver.user.address.zip_code),
      (receiver.user.address.country = country
        ? country.toUpperCase()
        : receiver.user.address.country),
      (receiver.user.address.uf = uf
        ? uf.toUpperCase()
        : receiver.user.address.uf),
      (receiver.user.address.city = city
        ? city.toUpperCase()
        : receiver.user.address.city),
      (receiver.user.address.district = district
        ? district.toUpperCase()
        : receiver.user.address.district),
      (receiver.user.address.street = street
        ? street
        : receiver.user.address.street),
      (receiver.user.address.number = number
        ? number
        : receiver.user.address.number),
      (receiver.user.address.complement = complement
        ? complement
        : receiver.user.address.complement),
      (receiver.mother_name = mother_name ? mother_name : receiver.mother_name),
      await receiversRepo.save(receiver);
    return receiver;
  };

  //criar update somente para instituição

  receiverDelete = async (receiver_id: string) => {
    const receiver = await receiversRepo.findOne({
      where: { receiver_id: receiver_id },
      relations: { user: true },
    });

    receiver.user.isActive = false;

    receiversRepo.save(receiver);
    return receiver;
  };
}
