import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAddressByIdService {
  async getAddressById(address_id: string) {
    const repo = new AddressesRepository();
    const address = await repo.getById(address_id);

    if (!address) {
      throw new Error("Address does not exists");
    }

    return address;
  }
}
