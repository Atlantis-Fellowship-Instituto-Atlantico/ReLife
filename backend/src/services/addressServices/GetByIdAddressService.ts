import { AddressesRepositories } from "../../repositories/AddressesRepositories";

export class GetByIdAddressService {
  async execute(id: string) {
    const repo = AddressesRepositories;
    const address = await repo.findOneBy({ id: id });

    if (!address) {
      return Error("Address does not exists");
    }

    return address;
  }
}
