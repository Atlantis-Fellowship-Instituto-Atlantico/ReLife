import { AppDataSource } from "../database/Index";
import { Role } from "../entities/Role";

export const RolesRepositories = AppDataSource.getRepository(Role);
