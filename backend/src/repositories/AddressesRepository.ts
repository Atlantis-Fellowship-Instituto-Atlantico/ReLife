import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";

const addressRepo = AppDataSource.getRepository(Address);

export class AddressesRepository {
  getById = async (address_id: string) => {
    const result = addressRepo.findOne({ where: { address_id: address_id } });

    return result;
  };

  getAll = async () => {
    const result = addressRepo.find();
    return result;
  };

  getByCountry = async (country: string) => {
    const result = addressRepo
      .createQueryBuilder("address")
      .where("address.country = :country", { country })
      .getOne();

    return result;
  };

  getByState = async (uf: string) => {
    const result = addressRepo
      .createQueryBuilder("address")
      .where("address.uf = :uf", { uf })
      .getOne();

    return result;
  };

  getByCity = async (city: string) => {
    const result = addressRepo
      .createQueryBuilder("address")
      .where("address.city = :city", { city })
      .getOne();

    return result;
  };
}
