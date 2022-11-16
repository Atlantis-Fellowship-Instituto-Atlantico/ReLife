import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetAddressesByCityService {
  async getByCity(city: string) {
    const repo = new AddressesRepository();
    const address = await repo.getByCity(city.toUpperCase());

    if (!address) {
      throw new Error("City of address does not exists");
    }

    return address;
  }
}
