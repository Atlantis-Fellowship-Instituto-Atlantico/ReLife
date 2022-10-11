import "reflect-metadata";
import { DataSource } from "typeorm";
import { AcessLevel } from "../entities/AcessLevel";
import { Address } from "../entities/Address";
import { Administrator } from "../entities/Administrators";
import { Institution } from "../entities/Institution";
import { Organ } from "../entities/Organs";
import { Person } from "../entities/People";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgrespw",
  database: "relifedb",
  synchronize: true,
  logging: false,
  entities: [AcessLevel, Address, Institution, Organ, Person, Administrator],
  migrations: [],
  subscribers: [],
});
