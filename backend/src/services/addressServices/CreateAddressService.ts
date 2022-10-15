import { AddressesRepositories } from "../../repositories/AddressesRepositories";

type AdddressRequest = {
  country_name: string;
  uf: string;
  city_name: string;
  zip_code: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
};

export class CreateAddressService {
  async execute({
    country_name,
    uf,
    city_name,
    zip_code,
    district,
    street,
    number,
    complement,
  }: AdddressRequest) {
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
