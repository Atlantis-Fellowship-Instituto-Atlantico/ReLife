import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
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
  telephone: string;

  @Column({ length: 40 })
  email: string;

  @Column({ length: 40 })
  user_name: string;

  @Column({ length: 25 })
  password: string;

  @Column()
  isActive: boolean;
}
