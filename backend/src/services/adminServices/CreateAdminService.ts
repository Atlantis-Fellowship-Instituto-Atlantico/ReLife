import { AdminRepository } from "../../repositories/AdminRepository";
import { InstitutionRepository } from "../../repositories/InstitutionsRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class CreateAdminService {
  async createAdmin(phone: string, email: string, password: string) {
    const adminsRepo = new AdminRepository();
    const userRepo = new UsersRepository();
    const institutionRepo = new InstitutionRepository();

    const adminExists = await adminsRepo.getAdminByEmail(email);
    const userExists = await userRepo.getUserByEmail(email);
    const institutionExists = await institutionRepo.getInstitutionByEmail(
      email
    );

    if (adminExists) {
      throw new Error(`Already have this admin.`);
    }

    if (
      (adminExists && adminExists.email === email) ||
      (userExists && userExists.email === email) ||
      (institutionExists && institutionExists.email === email)
    ) {
      throw new Error(`Email already in use.`);
    }

    if (
      (userExists && userExists.phone == phone) ||
      (adminExists && adminExists.phone == phone) ||
      (institutionExists && institutionExists.phone == phone)
    ) {
      throw new Error(`Phone already in use.`);
    }

    try {
      const admin = await adminsRepo.createAdmin(phone, email, password);
      return admin;
    } catch (error) {
      throw new Error(`Error on admin creation`);
    }
  }
}
