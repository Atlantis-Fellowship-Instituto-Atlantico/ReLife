import { AppDataSource } from "../database/Index";
import { Receiver } from "../entities/Receiver";

export const ReceiversRepositories = AppDataSource.getRepository(Receiver);
