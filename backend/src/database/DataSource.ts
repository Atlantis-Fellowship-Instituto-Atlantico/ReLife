import "reflect-metadata";
import { DataSource } from "typeorm";
import { Orgaos } from "../entities/Orgaos";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgrespw",
  database: "relifedb",
  synchronize: true,
  logging: false,
  entities: [Orgaos],
  migrations: [],
  subscribers: [],
});
