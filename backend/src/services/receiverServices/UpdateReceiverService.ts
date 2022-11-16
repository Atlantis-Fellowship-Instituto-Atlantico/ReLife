import { ReceiversRepository } from "../../repositories/ReceiversRepository";

export class UpdateReceiverService {
  async updateReceiver(
    receiver_id: string,
    role: string,
    full_name: string,
    sex:string,
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
    const receiverRepo = new ReceiversRepository();

    const validReceiver = await receiverRepo.getById(receiver_id);

    if (!validReceiver) {
      throw new Error("Receiver does not exists");
    }

    
    const receiver = await receiverRepo.updateReceiver(
      receiver_id,
      role,
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
    
    return receiver;
    
  }
}
