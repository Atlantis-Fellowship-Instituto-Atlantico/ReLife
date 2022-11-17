import { DonorsRepository } from "../../repositories/DonorsRepository";

export class UpdateDonorService {
  async updateDonor(
    donor_id: string,
    full_name: string,
    sex: string,
    cpf: string,
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
    complement: string,
    mother_name: string
  ) {
    const donorRepo = new DonorsRepository();

    const validDonor = await donorRepo.getById(donor_id);

    if (!validDonor) {
      throw new Error("Donor does not exists");
    }

    const donor = await donorRepo.updateDonor(
      donor_id,
      full_name,
      sex,
      cpf,
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
      complement,
      mother_name
    );
    return donor;
  }
}
