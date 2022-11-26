import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateUserByInstitutionService {
  async UpdateUserByInstitution(
    cpf: string,
    blood_type?: string,
    institution_name?: string
  ) {
    const userRepo = new UsersRepository();
    const institutionRepo = new InstitutionRepository();

    const validUser = await userRepo.getUserByCpf(cpf);

    if (institution_name != null) {
      const validInstitution = await institutionRepo.getInstitutionByName(
        institution_name.toUpperCase()
      );
      if (!validInstitution) {
        throw new Error("Institution does not exists");
      }
    }

    if (!validUser) {
      throw new Error("User does not exists");
    }

    const user = await userRepo.updateUserByInstitution(
      cpf,
      blood_type,
      institution_name
    );
    return user;
  }
}
