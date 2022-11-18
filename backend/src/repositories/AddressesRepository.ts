import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";

const addressRepo = AppDataSource.getRepository(Address);

export class AddressesRepository {
  getById = async (address_id: string) => {
    const result = addressRepo.findOne({ where: { address_id: address_id } });
    return result;
  };

  getUsersByCountry = async (country: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.donor", "donor")
      .leftJoinAndSelect("address.receiver", "receiver")
      .where("address.country = :country", { country })
      .getMany();

    return result;
  };

  getUsersByState = async (uf: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.donor", "donor")
      .leftJoinAndSelect("address.receiver", "receiver")
      .where("donor.address.uf = :uf", { uf })
      .andWhere("receiver.address.uf = :uf", { uf })
      .getMany();

    return result;
  };

  getUsersByCity = async (city: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.donor", "donor")
      .leftJoinAndSelect("address.receiver", "receiver")
      .where("address.city = :city", { city })
      .getMany();

    return result;
  };

  getInstitutionsByCountry = async (country: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.institution", "institution")
      .where("address.country = :country", { country })
      .getMany();

    return result;
  };

  getInstitutionsByState = async (uf: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.institution", "institution")
      .where("address.uf = :uf", { uf })
      .getMany();

    return result;
  };

  getInstitutionsByCity = async (city: string) => {
    const result = await addressRepo
      .createQueryBuilder("address")
      .leftJoinAndSelect("address.institution", "institution")
      .where("address.city = :city", { city })
      .getMany();

    return result;
  };
}
