import { Request, Response } from "express";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { GetInstitutionForAutenticateService } from "../services/institutionServices/GetInstitutionForAutenticateService";
import { GetUserForAutenticateService } from "../services/userServices/GetUserForAutenticateService";

export class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const userService = new GetUserForAutenticateService();
    const institutionService = new GetInstitutionForAutenticateService();

    const userExist = await userService.getForAuth(email);
    const institutionExist = await institutionService.getForAuth(email);

    if (userExist) {
      const isUserValidPassword = compare(password, userExist.password);

      if (!isUserValidPassword) {
        return res.status(401).json("Authentication failure");
      }
      const token = sign(
        { id: userExist.user_id, role: userExist.role },
        process.env.SECRET_KEY_JWT as string,
        { expiresIn: "2h" }
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
    } else if (institutionExist) {
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
        { expiresIn: "2h" }
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
    }
  }
}
