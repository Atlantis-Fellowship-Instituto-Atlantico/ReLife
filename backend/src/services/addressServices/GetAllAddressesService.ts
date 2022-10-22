import { AddressesRepositories } from "../../repositories/AddressesRepositories";

export class GetAllAddressesService {
  async execute() {
    const repo = AddressesRepositories;
    const addresses = await repo.find();

    return addresses;
  }
}
