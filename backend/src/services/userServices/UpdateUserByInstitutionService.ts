import { Organ } from "../../entities/Organ";
import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateUserByInstitutionService {
  async UpdateUserByInstitution(
    cpf: string,
    blood_type: string,
    organs: Organ[]
  ) {
    const userRepo = new UsersRepository();

    const validUser = await userRepo.getUserByCpf(cpf);

    if (!validUser) {
      throw new Error("User does not exists");
    }

    const user = await userRepo.updateUserByInstitution(
      cpf,
      blood_type,
      organs
    );
    return user;
  }
}
