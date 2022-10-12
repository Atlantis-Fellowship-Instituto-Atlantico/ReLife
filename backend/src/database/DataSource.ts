import "reflect-metadata";
import { DataSource } from "typeorm";
import { AcessLevel } from "../entities/AcessLevel";
import { Address } from "../entities/Address";
import { Administrator } from "../entities/Administrator";
import { Institution } from "../entities/Institution";
import { Organ } from "../entities/Organ";
import { User } from "../entities/User";
import { Donor } from "../entities/Donor";
import { Receiver } from "../entities/Receiver";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgrespw",
  database: "relifedb",
  synchronize: true,
  logging: false,
  entities: [AcessLevel, Address, Administrator, Institution, Organ, User, Donor, Receiver],
  migrations: [],
  subscribers: [],
});
