import { AdminRepository } from "../../repositories/AdminRepository";

export class DeleteAdminService {
  async deleteAdmin(admin_id: string) {
    const repo = new AdminRepository();
    const admin = await repo.getById(admin_id);

    if (!admin) {
      throw new Error("Admin does not exists");
    }

    await repo.adminDelete(admin_id);
  }
}
