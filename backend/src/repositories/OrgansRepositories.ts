import { AppDataSource } from "../database";
import { Organ } from "../entities/Organ";

export const OrgansRepositories = AppDataSource.getRepository(Organ);
