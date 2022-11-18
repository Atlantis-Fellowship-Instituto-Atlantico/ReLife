import { AdminRepository } from "../../repositories/AdminRepository";

export class DeleteAdminService {
  async deleteAdmin(email: string) {
    const repo = new AdminRepository();
    const admin = await repo.getAdminByEmail(email);

    if (!admin) {
      throw new Error("Admin does not exists");
    }

    await repo.adminDelete(email);
  }
}
