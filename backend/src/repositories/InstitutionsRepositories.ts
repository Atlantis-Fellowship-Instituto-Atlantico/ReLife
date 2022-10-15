import { AppDataSource } from "../database/Index";
import { Institution } from "../entities/Institution";

export const InstitutionsRepositories =
  AppDataSource.getRepository(Institution);
