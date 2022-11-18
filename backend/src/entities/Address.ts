import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Donor } from "./Donor";
import { Receiver } from "./Receiver";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly address_id: string;

  @OneToOne(() => Donor, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  donor: Donor;

  @OneToOne(() => Receiver, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  receiver: Receiver;

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
