import { DonorsRepository } from "../../repositories/DonorsRepository";

export class UpdateDonorService {
  async updateDonor(
    donor_id: string,
    role: string,
    full_name: string,
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
      return new Error("User does not exists");
    }

    try {
      const donor = await donorRepo.updateDonor(
        donor_id,
        role,
        full_name,
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
    } catch (err) {
      throw Error("Error on update user");
    }
  }
}
