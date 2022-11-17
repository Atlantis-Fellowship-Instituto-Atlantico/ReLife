import { AdminRepository } from "../../repositories/AdminRepository";
import { UsersRepository } from "../../repositories/UsersRepository";

export class UpdateAdminService {
  async updateAdmin(
    admin_id: string,
    phone: string,
    email: string,
    password: string
  ) {
    const repo = new AdminRepository();

    const validAdmin = await repo.getById(admin_id);

    if (!validAdmin) {
      throw new Error("Admin does not exists");
    }

    const admin = await repo.updateAdmin(admin_id, phone, email, password);
    return admin;
  }
}
