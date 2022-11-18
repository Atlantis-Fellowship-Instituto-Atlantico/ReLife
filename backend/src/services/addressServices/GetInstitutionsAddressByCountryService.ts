import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetInstitutionsAddressByCountryService {
  async getInstitutionsAddressByCountry(country: string) {
    const repo = new AddressesRepository();
    const address = await repo.getInstitutionsByCountry(country.toUpperCase());

    if (!address) {
      throw new Error("Country of address does not exists");
    }

    return address;
  }
}
