import { AppDataSource } from "../database/AppDataSource";
import { Donor } from "../entities/Donor";

export const DonorsRepositories = AppDataSource.getRepository(Donor);
