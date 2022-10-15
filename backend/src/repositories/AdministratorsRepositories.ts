import { AppDataSource } from "../database/Index";
import { Administrator } from "../entities/Administrator";

export const AdministratorsRepositories =
  AppDataSource.getRepository(Administrator);
