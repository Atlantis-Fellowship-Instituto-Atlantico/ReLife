import { Institution } from "../../entities/Institution";
import { Organ } from "../../entities/Organ";
import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateOrgansUserByInstitutionService {
  async UpdateOrgansUserByInstitution(cpf: string, organs?: Array<Organ>) {
    const userRepo = new UsersRepository();

    const validUser = await userRepo.getUserByCpf(cpf);

    if (!validUser) {
      throw new Error("User does not exists");
    }

    const user = await userRepo.updateOrgansUserByInstitution(cpf, organs);
    return user;
  }
}
