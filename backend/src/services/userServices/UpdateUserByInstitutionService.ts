import { Institution } from "../../entities/Institution";
import { Organ } from "../../entities/Organ";
import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateUserByInstitutionService {
  async UpdateUserByInstitution(
    cpf: string,
    blood_type: string,
    organs: Organ[],
    institution_name: string
  ) {
    const userRepo = new UsersRepository();
    const institutionRepo = new InstitutionRepository();

    const validUser = await userRepo.getUserByCpf(cpf);
    const validInstitution = await institutionRepo.getInstitutionByName(
      institution_name
    );

    if (!validUser) {
      throw new Error("User does not exists");
    }
    if (!validInstitution) {
      throw new Error("Institution does not exists");
    }

    const user = await userRepo.updateUserByInstitution(
      cpf,
      blood_type,
      organs,
      institution_name
    );
    return user;
  }
}
