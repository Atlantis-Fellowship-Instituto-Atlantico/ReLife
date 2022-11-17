import { AdminRepository } from "../../repositories/AdminRepository";

export class GetAdminForAutenticateService {
  async getAdminForAuth(email: string) {
    const repo = new AdminRepository();
    const admin = await repo.getAdminForAutenticate(email);

    return admin;
  }
}
