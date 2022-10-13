import { AppDataSource } from "../database/AppDataSource";
import { Receiver } from "../entities/Receiver";

export const ReceiversRepositories = AppDataSource.getRepository(Receiver);
