import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { IsEmail, Min, Max } from "class-validator";
import { Address } from "./Address";
import { Role } from "./Role";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role: Role;

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45 })
  last_name: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 15 })
  phone: string;

  @Column({ length: 40 })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;
}
