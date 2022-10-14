import { IAddress } from "../../interfaces/IAddress";
import { AddressesRepositories } from "../../repositories/AddressesRepositories";

class CreateAddressService {
  async execute({
    country_name,
    uf,
    city_name,
    zip_code,
    district,
    street,
    number,
    complement,
  }: IAddress) {
    const addressRepository = AddressesRepositories;

    const address = addressRepository.create({
      country_name,
      uf,
      city_name,
      zip_code,
      district,
      street,
      number,
      complement,
    });

    await addressRepository.save(address);

    return address;
  }
}

export { CreateAddressService };
