import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { InsertValuesMissingError } from "typeorm";
import { AdminRepository } from "../repositories/AdminRepository";
import { InstitutionRepository } from "../repositories/InstitutionsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

export class AuthService {
  async login(email: string, password: string) {
    const userRepo = new UsersRepository();
    const adminRepo = new AdminRepository();
    const institutionRepo = new InstitutionRepository();

    const user = await userRepo.getUserForAutenticate(email);
    const admin = await adminRepo.getAdminForAutenticate(email);
    const institution = await institutionRepo.getInstitutionForAutenticate(
      email
    );
    try {
      if (user) {
        const userPass = await compare(password, user.password);
        if (!userPass) {
          return new Error("Invalid password!");
        }
        const token = sign(
          {
            id: user.user_id,
            role: user.role,
            email: user.email,
          },
          process.env.SECRET_KEY_JWT as string,
          { expiresIn: "24h" }
        );
        return token;
      } else if (admin) {
        const adminPass = await compare(password, admin.password);
        if (!adminPass) {
          return new Error("Invalid password!");
        }
        const token = sign(
          {
            id: admin.admin_id,
            role: admin.role,
            email: admin.email,
          },
          process.env.SECRET_KEY_JWT as string,
          { expiresIn: "24h" }
        );
        return token;
      } else if (institution) {
        const institutionPass = await compare(password, institution.password);
        if (!institutionPass) {
          return new Error("Invalid password!");
        }
        const token = sign(
          {
            id: institution.institution_id,
            role: institution.role,
            email: institution.email,
          },
          process.env.SECRET_KEY_JWT as string,
          { expiresIn: "24h" }
        );
        return token;
      } else {
        return new Error("Invalid login!");
      }
    } catch (error) {
      return new Error(error);
    }
  }
}
