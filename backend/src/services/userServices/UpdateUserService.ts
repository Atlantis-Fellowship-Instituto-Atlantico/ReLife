import { Address } from "../../entities/Address";
import { Role } from "../../entities/Role";
import { AddressesRepositories } from "../../repositories/AddressesRepositories";
import { RolesRepositories } from "../../repositories/RolesRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";

type UserUpdateRequest = {
  id: string;
  userRole: Role;
  userAddress: Address;
  name: string;
  last_name: string;
  cpf: string;
  phone: string;
  email: string;
  user_name: string;
  password: string;
  isActive: boolean;
};

export class UpdateUserService {
  async execute({
    id,
    userRole,
    userAddress,
    name,
    last_name,
    cpf,
    phone,
    email,
    user_name,
    password,
    isActive,
  }: UserUpdateRequest) {
    const userRepo = UsersRepositories;

    const user = await userRepo.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      return new Error("User does not exists");
    }

    user.role = userRole ? userRole : user.role;
    user.address = userAddress ? userAddress : user.address;
    user.name = name ? name : user.name;
    user.last_name = last_name ? last_name : user.last_name;
    user.cpf = cpf ? cpf : user.cpf;
    user.phone = phone ? phone : user.phone;
    user.email = email ? email : user.email;
    user.user_name = user_name ? user_name : user.user_name;
    user.password = password ? password : user.password;
    user.isActive = isActive ? isActive : user.isActive;

    await userRepo.save(user);

    return user;
  }
}
