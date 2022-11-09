import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { IsEmail } from "class-validator";
import { Address } from "./Address";

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

  @Column()
  role: string;

  @Column({ length: 150 })
  full_name: string;

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

  @Column({ nullable: true, select: false, default: "" })
  avatar: string;
}
