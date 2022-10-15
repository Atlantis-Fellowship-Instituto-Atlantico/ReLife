import { AddressesRepositories } from "../../repositories/AddressesRepositories";

type AdddressUpdateRequest = {
  id: string;
  country_name: string;
  uf: string;
  city_name: string;
  zip_code: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
};

export class UpdateAddressService {
  async execute({
    id,
    country_name,
    uf,
    city_name,
    zip_code,
    district,
    street,
    number,
    complement,
  }: AdddressUpdateRequest) {
    const repo = AddressesRepositories;

    const address = await repo.findOneBy({
      id: id,
    });

    if (!address) {
      return new Error("Address does not exists");
    }

    address.country_name = country_name ? country_name : address.country_name;
    address.uf = uf ? uf : address.uf;
    address.city_name = city_name ? city_name : address.city_name;
    address.zip_code = zip_code ? zip_code : address.zip_code;
    address.district = district ? district : address.district;
    address.street = street ? street : address.street;
    address.number = number ? number : address.number;
    address.complement = complement ? complement : address.complement;

    await repo.save(address);
    return address;
  }
}
