import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { IsEmail } from "class-validator";
import { Organ } from "./Organ";
import { Address } from "./Address";
import { Institution } from "./Institution";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly user_id: string;

  @OneToOne(() => Address, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "address_id" })
  address: Address;

  @ManyToOne(() => Institution, (institution) => institution.users, {
    nullable: true,
  })
  @JoinColumn({ name: "institution_id" })
  institution: Institution;

  @OneToMany(() => Organ, (organ) => organ.user, {
    nullable: true,
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "organ_id" })
  organs: Organ[];

  @Column({ length: 20 })
  role: string;

  @Column({ length: 150 })
  full_name: string;

  @Column({ length: 20 })
  sex: string;

  @Column({ unique: true, length: 14 })
  cpf: string;

  @Column({ unique: true, length: 15 })
  phone: string;

  @Column({ unique: true, length: 40 })
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true, length: 45, default: "" })
  mother_name: string;

  @Column({ nullable: true, length: 10, default: "" })
  blood_type: string;

  @Column({ nullable: true, select: false, default: "" })
  avatar: string;
}
