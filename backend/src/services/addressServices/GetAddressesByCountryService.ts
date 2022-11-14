import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAddressByCountryService {
  async getByCountry(country: string) {
    const repo = new AddressesRepository();
    const addresses = await repo.getByCountry(country.toUpperCase());

    if (!addresses) {
      return Error("Addresses does not exists");
    }

    return addresses;
  }
}
