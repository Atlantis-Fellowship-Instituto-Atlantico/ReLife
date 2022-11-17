import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv/config");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgrespw",
  database: "relifedb",
  synchronize: false,
  logging: false,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});
