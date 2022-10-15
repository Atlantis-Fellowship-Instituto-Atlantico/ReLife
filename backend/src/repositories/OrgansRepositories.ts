import { AppDataSource } from "../database/Index";
import { Organ } from "../entities/Organ";

export const OrgansRepositories = AppDataSource.getRepository(Organ);
