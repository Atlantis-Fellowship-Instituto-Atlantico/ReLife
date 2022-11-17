import { Request, Response } from "express";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { GetInstitutionForAutenticateService } from "../services/institutionServices/GetInstitutionForAutenticateService";
import { GetUserForAutenticateService } from "../services/userServices/GetUserForAutenticateService";
import { GetAdminForAutenticateService } from "../services/adminServices/GetAdminForAutenticateService";

export class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const userService = new GetUserForAutenticateService();
    const adminService = new GetAdminForAutenticateService();
    const institutionService = new GetInstitutionForAutenticateService();

    const userExist = await userService.getUserForAuth(email);
    const institutionExist = await institutionService.getInstitutionForAuth(
      email
    );
    const adminExist = await adminService.getAdminForAuth(email);

    if (userExist) {
      try {
        const isUserValidPassword = compare(password, userExist.password);

        if (!isUserValidPassword) {
          return res.status(401).json("Authentication failure");
        }
        const token = sign(
          { id: userExist.user_id, role: userExist.role },
          process.env.SECRET_KEY_JWT as string,
          { expiresIn: "24h" }
        );
        //retirar na hora da produção
        const user = {
          id: userExist.user_id,
          name: userExist.full_name,
        };
        return res.json({
          user,
          token,
        });
      } catch (error) {
        res.status(401).send(error.message);
      }
    } else if (institutionExist) {
      try {
        const isInstitutionValidPassword = compare(
          password,
          institutionExist.password
        );

        if (!isInstitutionValidPassword) {
          return res.status(401).json("Authentication failure");
        }
        const token = sign(
          { id: institutionExist.institution_id, role: institutionExist.role },
          process.env.SECRET_KEY_JWT as string,
          { expiresIn: "24h" }
        );
        //retirar na hora da produção
        const institution = {
          id: institutionExist.institution_id,
          name: institutionExist.institution_name,
        };
        return res.json({
          institution,
          token,
        });
      } catch (error) {
        res.status(401).send(error.message);
      }
    } else if (adminExist) {
      try {
        const isAdminValidPassword = compare(password, adminExist.password);

        if (!isAdminValidPassword) {
          return res.status(401).json("Authentication failure");
        }
        const token = sign(
          { id: adminExist.admin_id, role: adminExist.role },
          process.env.SECRET_KEY_JWT as string,
          { expiresIn: "24h" }
        );
        //retirar na hora da produção
        const admin = {
          id: adminExist.admin_id,
        };
        return res.json({
          admin,
          token,
        });
      } catch (error) {
        res.status(401).send(error.message);
      }
    } else if (!userExist && !institutionExist && !adminExist) {
      res.status(404).json("Usuario não encontrado").end();
    }
  }
}
