import { InstitutionRepository } from "../../repositories/InstitutionsRepository";

export class UpdateInstitutionService {
  async updateInstitution(
    institution_id: string,
    institution_name: string,
    responsible_name: string,
    cnpj: string,
    phone: string,
    email: string,
    password: string,
    zip_code: string,
    country: string,
    uf: string,
    city: string,
    district: string,
    street: string,
    number: string,
    complement: string
  ) {
    const institutionRepo = new InstitutionRepository();

    const validInstitution = await institutionRepo.getById(institution_id);

    if (!validInstitution) {
      throw new Error("Institution does not exists");
    }

    const institution = await institutionRepo.updateInstitution(
      institution_id,
      institution_name,
      responsible_name,
      cnpj,
      phone,
      email,
      password,
      zip_code,
      country,
      uf,
      city,
      district,
      street,
      number,
      complement
    );
    return institution;
    
  }
}
