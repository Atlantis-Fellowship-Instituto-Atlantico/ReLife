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
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.donor", "donor")
      .leftJoinAndSelect("address.receiver", "receiver")
      .where("address.country = :country", { country })
      .getMany();

    return result;
  };

  getByState = async (uf: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.donor", "donor")
      .leftJoinAndSelect("address.receiver", "receiver")
      .where("address.uf = :uf", { uf })
      .getMany();

    return result;
  };

  getByCity = async (city: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.donor", "donor")
      .leftJoinAndSelect("address.receiver", "receiver")
      .where("address.city = :city", { city })
      .getMany();

    return result;
  };
}
