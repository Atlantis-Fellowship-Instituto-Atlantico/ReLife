import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { AcessLevel } from "./AcessLevel";
import { Address } from "./Address";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => AcessLevel)
  @JoinColumn({ name: "id" })
  level_id: AcessLevel;

  @OneToOne(() => Address)
  @JoinColumn({ name: "id" })
  address_id: Address;

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
  active: boolean;
}