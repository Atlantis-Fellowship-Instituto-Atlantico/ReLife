import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv/config");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgrespw",
  database: "relifedb",
  synchronize: true,
  logging: false,
  migrationsRun: true,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});
