import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Institution } from "./Institution";
import { User } from "./User";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly address_id: string;

  @OneToOne(() => User, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @OneToOne(() => Institution, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  institution: Institution;

  @Column({ length: 10 })
  zip_code: string;

  @Column({ length: 50 })
  country: string;

  @Column({ length: 2 })
  uf: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 50 })
  street: string;

  @Column({ nullable: true, length: 10, default: "s/n" })
  number: string;

  @Column({ nullable: true, length: 50, default: "" })
  complement: string;
}
