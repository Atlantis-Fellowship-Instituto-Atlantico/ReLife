import { hash } from "bcryptjs";
import { AppDataSource } from "../database/Index";
import { Admin } from "../entities/Admin";
import { User } from "../entities/User";

const adminRepo = AppDataSource.getRepository(Admin);

export class AdminRepository {
  getById = async (admin_id: string) => {
    const result = adminRepo
      .createQueryBuilder("admin")
      .where("admin.admin_id = :admin_id", { admin_id })
      .getOne();
    return result;
  };

  getAdminByEmail = async (email: string) => {
    const result = await adminRepo
      .createQueryBuilder("admin")
      .where("admin.email = :email", { email })
      .getOne();
    return result;
  };

  getAdminForAutenticate = async (email: string) => {
    const result = await adminRepo
      .createQueryBuilder("admin")
      .addSelect("admin.password")
      .where("admin.email = :email", { email })
      .andWhere("admin.isActive = true")
      .getOne();
    return result;
  };

  createAdmin = async (phone: string, email: string, password: string) => {
    const passHash = await hash(password, 8);
    const result = adminRepo.create({
      phone,
      email,
      password: passHash,
    });

    await adminRepo.save(result);
    return result;
  };

  updateAdmin = async (
    admin_id: string,
    phone: string,
    email: string,
    password: string
  ) => {
    const admin = await adminRepo.findOne({
      where: { admin_id: admin_id },
    });

    (admin.phone = phone ? phone : admin.phone),
      (admin.email = email ? email : admin.email),
      (admin.password = password ? await hash(password, 8) : admin.password);

    await adminRepo.save(admin);
    return admin;
  };

  adminDelete = async (admin_id: string) => {
    const admin = adminRepo
      .createQueryBuilder()
      .update(Admin)
      .set({ isActive: false })
      .where({ admin_id: admin_id })
      .execute();

    return admin;
  };
}
