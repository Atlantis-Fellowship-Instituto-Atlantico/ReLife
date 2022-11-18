import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { IsEmail } from "class-validator";
import { Address } from "./Address";
import { Donor } from "./Donor";
import { Organ } from "./Organ";
import { Receiver } from "./Receiver";

@Entity("institutions")
export class Institution {
  @PrimaryGeneratedColumn("uuid")
  readonly institution_id: string;

  @OneToOne(() => Address, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "address_id" })
  address: Address;

  @OneToMany(() => Donor, (donor) => donor.donor_id)
  @JoinColumn({ name: "donor_id" })
  donors: Donor[];

  @OneToMany(() => Receiver, (receiver) => receiver.receiver_id)
  @JoinColumn({ name: "receiver_id" })
  receivers: Receiver[];

  @Column({ default: "INSTITUTION" })
  role: string;

  @Column({ unique: true, length: 100 })
  institution_name: string;

  @Column({ length: 150 })
  responsible_name: string;

  @Column({ unique: true, length: 20 })
  cnpj: string;

  @Column({ unique: true, length: 20 })
  phone: string;

  @Column({ unique: true, length: 60 })
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true, select: false, default: "" })
  avatar: string;
}
