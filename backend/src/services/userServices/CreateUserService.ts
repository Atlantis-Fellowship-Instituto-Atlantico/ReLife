import { validate } from "class-validator";
import { AddressesRepositories } from "../../repositories/AddressesRepositories";
import { RolesRepositories } from "../../repositories/RolesRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";

type UserRequest = {
  role: number;
  address: string;
  name: string;
  last_name: string;
  cpf: string;
  phone: string;
  email: string;
  user_name: string;
  password: string;
};

export class CreateUserService {
  async execute({
    role,
    address,
    name,
    last_name,
    cpf,
    phone,
    email,
    user_name,
    password,
  }: UserRequest) {
    const userRepository = UsersRepositories;
    const roleRepository = RolesRepositories;
    const addressRepository = AddressesRepositories;

    const existUserName = await userRepository.findOneBy({
      user_name: user_name,
    });
    const existUserCpf = await userRepository.findOneBy({ cpf: cpf });
    const existUserEmail = await userRepository.findOneBy({ email: email });
    const existUserPhone = await userRepository.findOneBy({
      phone: phone,
    });
    const existRole = await roleRepository.findOne({ where: { id: role } });
    const existAddress = await addressRepository.findOne({
      where: { id: address },
    });

    if (existUserName) {
      return new Error("User name already exists");
    }

    if (existUserCpf) {
      return new Error("CPF already exists");
    }

    if (existUserEmail) {
      return new Error("Email already exists");
    }

    if (existUserPhone) {
      return new Error("Phone already exists");
    }

    const user = userRepository.create({
      role: existRole,
      address: existAddress,
      name,
      last_name,
      cpf,
      phone,
      email,
      user_name,
      password,
      isActive: true,
    });

    const errors = await validate(user);
    if (errors.length > 0) {
      return new Error(`Validation failed!`);
    } else {
      await userRepository.save(user);
    }

    return user;
  }
}
