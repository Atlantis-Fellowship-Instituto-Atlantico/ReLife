import { AppDataSource } from "../database/AppDataSource";
import { Organ } from "../entities/Organ";

export const OrgansRepositories = AppDataSource.getRepository(Organ);
