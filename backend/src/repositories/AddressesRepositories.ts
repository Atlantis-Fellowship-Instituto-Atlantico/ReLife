import { AppDataSource } from "../database/AppDataSource";
import { Address } from "../entities/Address";

export const AddressesRepositories = AppDataSource.getRepository(Address);
