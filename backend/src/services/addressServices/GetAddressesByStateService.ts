import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAddressesByStateService {
  async getByState(state: string) {
    const repo = new AddressesRepository();
    const address = await repo.getByState(state.toUpperCase());

    if (!address) {
      throw new Error("State of address does not exists");
    }

    return address;
  }
}
