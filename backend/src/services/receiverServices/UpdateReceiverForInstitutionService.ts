import { Organ } from "../../entities/Organ";
import { DonorsRepository } from "../../repositories/DonorsRepository";
import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class UpdateReceiverForInstitutionService {
  async updateReceiverForInstitution(
    donor_id: string,
    blood_type: string,
    organs: Array<Organ>
  ) {
    const receiverRepo = new ReceiversRepository();

    const validReceiver = await receiverRepo.getById(donor_id);

    if (!validReceiver) {
      throw new Error("Receiver does not exists");
    }

    const receiver = await receiverRepo.updateReceiverForInstitution(
      donor_id,
      blood_type,
      organs
    );
    return receiver;
  }
}
