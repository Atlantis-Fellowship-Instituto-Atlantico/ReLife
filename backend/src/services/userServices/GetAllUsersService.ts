import { UsersRepositories } from "../../repositories/UsersRepositories";

export class GetAllUsersService {
  async execute() {
    const userRepository = UsersRepositories;
    const users = await userRepository.find();

    return users;
  }
}
