import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAddressesByStateService {
  async getByState(state: string) {
    const repo = new AddressesRepository();
    const addresses = await repo.getByState(state);

    if (!addresses) {
      return Error("Addresses does not exists");
    }

    return addresses;
  }
}
