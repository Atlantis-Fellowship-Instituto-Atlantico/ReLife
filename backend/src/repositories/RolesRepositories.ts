import { AppDataSource } from "../database";
import { Role } from "../entities/Role";

export const RolesRepositories = AppDataSource.getRepository(Role);
