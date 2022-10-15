import "reflect-metadata";
import { DataSource } from "typeorm";
import { Address } from "../entities/Address";
require("dotenv/config");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  migrationsRun: true,
  entities: [Address],
  migrations: ["database/**/migrations/*.ts"],
});
