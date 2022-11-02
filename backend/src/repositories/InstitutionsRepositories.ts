import { AppDataSource } from "../database";
import { Institution } from "../entities/Institution";

export const InstitutionsRepositories =
  AppDataSource.getRepository(Institution);
