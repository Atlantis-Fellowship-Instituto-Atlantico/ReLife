import "reflect-metadata";
import { DataSource } from "typeorm";
import { Address } from "../entities/Address";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgrespw",
  database: "relifedb",
  synchronize: true,
  logging: false,
  migrationsRun: true,
  entities: [Address],
  migrations: ["database/**/migrations/*.ts"],
});
