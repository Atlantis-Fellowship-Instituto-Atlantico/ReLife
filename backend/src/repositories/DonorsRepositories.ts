import { AppDataSource } from "../database";
import { Donor } from "../entities/Donor";

export const DonorsRepositories = AppDataSource.getRepository(Donor);
