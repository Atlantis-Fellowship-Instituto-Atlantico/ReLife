import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetUsersAddressByStateService {
  async getUsersAddressByState(state: string) {
    const repo = new AddressesRepository();
    const address = await repo.getUsersByState(state.toUpperCase());

    if (!address) {
      throw new Error("State of address does not exists");
    }

    return address;
  }
}
