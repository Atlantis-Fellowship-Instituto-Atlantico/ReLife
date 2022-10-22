import { validate } from "class-validator";
import { AddressesRepositories } from "../../repositories/AddressesRepositories";
import { InstitutionsRepositories } from "../../repositories/InstitutionsRepositories";
import { RolesRepositories } from "../../repositories/RolesRepositories";

type InstitutionRequest = {
  role: number;
  address: string;
  institution_name: string;
  responsible_name: string;
  cnpj: string;
  phone: string;
  email: string;
  password: string;
  isActive: boolean;
};

export class CreateInstitutionService {
  async execute({
    role,
    address,
    institution_name,
    responsible_name,
    cnpj,
    phone,
    email,
    password,
    isActive,
  }: InstitutionRequest) {
    const institutionRepository = InstitutionsRepositories;
    const roleRepository = RolesRepositories;
    const addressRepository = AddressesRepositories;

    const existUserName = await institutionRepository.findOneBy({
      email: email,
    });
    const existUserCnpj = await institutionRepository.findOneBy({ cnpj: cnpj });
    const existUserEmail = await institutionRepository.findOneBy({
      email: email,
    });
    const existUserPhone = await institutionRepository.findOneBy({
      phone: phone,
    });
    const existRole = await roleRepository.findOne({ where: { id: role } });
    const existAddress = await addressRepository.findOne({
      where: { id: address },
    });

    if (existUserName) {
      return new Error("User name already exists");
    }

    if (existUserCnpj) {
      return new Error("CPF already exists");
    }

    if (existUserEmail) {
      return new Error("Email already exists");
    }

    if (existUserPhone) {
      return new Error("Phone already exists");
    }

    const institution = institutionRepository.create({
      role: existRole,
      address: existAddress,
      institution_name,
      responsible_name,
      cnpj,
      phone,
      email,
      password,
      isActive,
    });

    const errors = await validate(institution);
    if (errors.length > 0) {
      return new Error(`Validation failed!`);
    } else {
      await institutionRepository.save(institution);
    }

    return institution;
  }
}
