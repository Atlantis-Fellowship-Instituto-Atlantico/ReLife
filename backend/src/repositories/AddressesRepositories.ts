import { AppDataSource } from "../database";
import { Address } from "../entities/Address";

export const AddressesRepositories = AppDataSource.getRepository(Address);
