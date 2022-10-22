import { Address } from "../../entities/Address";
import { Role } from "../../entities/Role";
import { InstitutionsRepositories } from "../../repositories/InstitutionsRepositories";

type UserUpdateRequest = {
  id: string;
  address: Address;
  institution_name: string;
  responsible_name: string;
  cnpj: string;
  phone: string;
  email: string;
  password: string;
  isActive: boolean;
};

export class UpdateInstitutionService {
  async execute({
    id,
    address,
    institution_name,
    responsible_name,
    cnpj,
    phone,
    email,
    password,
    isActive,
  }: UserUpdateRequest) {
    const institutionRepo = InstitutionsRepositories;

    const institution = await institutionRepo.findOne({
      where: {
        id: id,
      },
    });

    if (!institution) {
      return new Error("User does not exists");
    }

    institution.address = address ? address : institution.address;
    institution.institution_name = institution_name
      ? institution_name
      : institution.institution_name;
    institution.responsible_name = responsible_name
      ? responsible_name
      : institution.responsible_name;
    institution.cnpj = cnpj ? cnpj : institution.cnpj;
    institution.phone = phone ? phone : institution.phone;
    institution.email = email ? email : institution.email;
    institution.password = password ? password : institution.password;
    institution.isActive = isActive ? isActive : institution.isActive;

    await institutionRepo.save(institution);

    return institution;
  }
}
