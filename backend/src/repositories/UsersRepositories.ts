import { QueryBuilder } from "typeorm";
import { AppDataSource } from "../database/Index";
import { User } from "../entities/User";

export const UsersRepositories = AppDataSource.getRepository(User);
