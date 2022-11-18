import { AddressesRepository } from "../../repositories/AddressesRepository";

export class GetInstitutionsAddressByStateService {
  async getInstitutionsAddressByState(state: string) {
    const repo = new AddressesRepository();
    const address = await repo.getInstitutionsByState(state.toUpperCase());

    if (!address) {
      throw new Error("State of address does not exists");
    }

    return address;
  }
}
