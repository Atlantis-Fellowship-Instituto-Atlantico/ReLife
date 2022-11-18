import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetUsersAddressByCountryService {
  async getUsersAddressByCountry(country: string) {
    const repo = new AddressesRepository();
    const address = await repo.getUsersByCountry(country.toUpperCase());

    if (!address) {
      throw new Error("Country of address does not exists");
    }

    return address;
  }
}
