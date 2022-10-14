import { AppDataSource } from "../database/Index";
import { Donor } from "../entities/Donor";

export const DonorsRepositories = AppDataSource.getRepository(Donor);
