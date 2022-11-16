import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAddressByCountryService {
  async getByCountry(country: string) {
    const repo = new AddressesRepository();
    const address = await repo.getByCountry(country.toUpperCase());

    if (!address) {
      throw new Error("Country of address does not exists");
    }

    return address;
  }
}
