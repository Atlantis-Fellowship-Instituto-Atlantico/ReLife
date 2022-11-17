import { Organ } from "../../entities/Organ";
import { DonorsRepository } from "../../repositories/DonorsRepository";

export class UpdateDonorForInstitutionService {
  async updateDonorForInstitution(
    donor_id: string,
    blood_type: string,
    organs: Array<Organ>
  ) {
    const donorRepo = new DonorsRepository();

    const validDonor = await donorRepo.getById(donor_id);

    if (!validDonor) {
      throw new Error("Donor does not exists");
    }

    const donor = await donorRepo.updateDonorForInstitution(
      donor_id,
      blood_type,
      organs
    );
    return donor;
  }
}
