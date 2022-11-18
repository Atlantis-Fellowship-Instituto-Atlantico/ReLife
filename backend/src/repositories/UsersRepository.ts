import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { User } from "../entities/User";

const userRepo = AppDataSource.getRepository(User);

export class UsersRepository {
  getById = async (user_id: string) => {
    const result = userRepo
      .createQueryBuilder("user")
      .where("user_id = :user_id", { user_id })
      .getOne();
    return result;
  };

  getAll = async () => {
    const result = userRepo.find();
    return result;
  };

  getUserByEmail = async (cpf: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
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
    password: string
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
    password: string
  ) => {
    const user = await userRepo.findOne({
      where: { user_id: user_id },
    });

    (user.role = role ? role : user.role),
      (user.full_name = full_name ? full_name : user.full_name),
      (user.sex = sex ? sex : user.sex),
      (user.cpf = cpf ? cpf : user.cpf),
      (user.phone = phone ? phone : user.phone),
      (user.email = email ? email : user.email),
      (user.password = password ? await hash(password, 8) : user.password),
      await userRepo.save(user);
    return user;
  };

  userDelete = async (user_id: string) => {
    const user = await userRepo.findOne({
      where: { user_id: user_id },
    });

    await userRepo.delete(user);

    return user;
  };
}
