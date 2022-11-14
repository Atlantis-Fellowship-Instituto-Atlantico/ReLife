import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAddressesByCityService {
  async getByCity(city: string) {
    const repo = new AddressesRepository();
    const addresses = await repo.getByCity(city);

    if (!addresses) {
      return Error("Addresses does not exists");
    }

    return addresses;
  }
}
