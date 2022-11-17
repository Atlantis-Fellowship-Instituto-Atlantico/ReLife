import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAllAddressesService {
  async getAllAddresses() {
    const repo = new AddressesRepository();
    const addresses = await repo.getAll();

    return addresses;
  }
}
