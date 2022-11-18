import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetInstitutionsAddressByCityService {
  async getInstitutionsAddressByCity(city: string) {
    const repo = new AddressesRepository();
    const address = await repo.getInstitutionsByCity(city.toUpperCase());

    if (!address) {
      throw new Error("Does not have users in this city");
    }

    return address;
  }
}
