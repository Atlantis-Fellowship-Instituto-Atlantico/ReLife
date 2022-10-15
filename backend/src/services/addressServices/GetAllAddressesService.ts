import { AddressesRepositories } from "../../repositories/AddressesRepositories";

export class GetAllAddressesService {
  async execute() {
    const addressRepository = AddressesRepositories;
    const addresses = await addressRepository.find();

    return addresses;
  }
}
