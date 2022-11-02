import { AppDataSource } from "../database";
import { Administrator } from "../entities/Administrator";

export const AdministratorsRepositories =
  AppDataSource.getRepository(Administrator);
