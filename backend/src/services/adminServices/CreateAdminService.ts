import { AdminRepository } from "../../repositories/AdminRepository";

export class CreateAdminService {
  async createAdmin(phone: string, email: string, password: string) {
    const adminsRepo = new AdminRepository();
    const adminExists = await adminsRepo.getAdminByEmail(email);

    if (adminExists && adminExists.email === email) {
      throw new Error(`Email already in use.`);
    }
    if (adminExists) {
      throw new Error(`Already have this admin.`);
    }

    try {
      const admin = await adminsRepo.createAdmin(phone, email, password);
      return admin;
    } catch (error) {
      throw new Error(`Error on admin creation`);
    }
  }
}
