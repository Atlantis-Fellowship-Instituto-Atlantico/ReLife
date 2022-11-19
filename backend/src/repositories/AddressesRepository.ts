import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";
import { Institution } from "../entities/Institution";
import { User } from "../entities/User";

const userRepo = AppDataSource.getRepository(User);
const institutionRepo = AppDataSource.getRepository(Institution);
const addressRepo = AppDataSource.getRepository(Address);

export class AddressesRepository {
  getById = async (address_id: string) => {
    const result = addressRepo.findOne({ where: { address_id: address_id } });
    return result;
  };

  getUsersByCountry = async (country: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("address.country = :country", { country })
      .getManyAndCount();

    return result;
  };

  getUsersByState = async (uf: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("address.uf = :uf", { uf })
      .getManyAndCount();

    return result;
  };

  getUsersByCity = async (city: string) => {
    const result = await userRepo
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.address", "address")
      .where("address.city = :city", { city })
      .getManyAndCount();

    return result;
  };

  getInstitutionsByCountry = async (country: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .where("address.country = :country", { country })
      .getManyAndCount();

    return result;
  };

  getInstitutionsByState = async (uf: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .where("address.uf = :uf", { uf })
      .getManyAndCount();

    return result;
  };

  getInstitutionsByCity = async (city: string) => {
    const result = await institutionRepo
      .createQueryBuilder("institution")
      .leftJoinAndSelect("institution.address", "address")
      .where("address.city = :city", { city })
      .getManyAndCount();

    return result;
  };
}
