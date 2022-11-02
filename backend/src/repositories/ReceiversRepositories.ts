import { AppDataSource } from "../database";
import { Receiver } from "../entities/Receiver";

export const ReceiversRepositories = AppDataSource.getRepository(Receiver);
