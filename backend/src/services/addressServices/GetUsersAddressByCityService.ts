import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetUsersAddressByCityService {
  async getUsersAddressByCity(city: string) {
    const repo = new AddressesRepository();
    const address = await repo.getUsersByCity(city.toUpperCase());

    if (!address) {
      throw new Error("Does not have users in this city");
    }

    return address;
  }
}
