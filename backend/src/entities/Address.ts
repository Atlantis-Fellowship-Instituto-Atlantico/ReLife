import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 50 })
  country_name: string;

  @Column({ length: 5 })
  uf: string;

  @Column({ length: 50 })
  city_name: string;

  @Column({ length: 10 })
  zip_code: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 50 })
  street: string;

  @Column({ length: 10 })
  number: string;

  @Column({ length: 50 })
  complement: string;
}
