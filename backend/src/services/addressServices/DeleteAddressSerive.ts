import { AddressesRepositories } from "../../repositories/AddressesRepositories";

export class DeleteAddressSerive {
  async execute(id: string) {
    const repo = AddressesRepositories;

    if (!(await repo.findOneBy({ id: id }))) {
      return Error("Address does not exists");
    }

    await repo.delete(id);
  }
}
