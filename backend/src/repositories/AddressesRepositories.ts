import { AppDataSource } from "../database/Index";
import { Address } from "../entities/Address";

export const AddressesRepositories = AppDataSource.getRepository(Address);
