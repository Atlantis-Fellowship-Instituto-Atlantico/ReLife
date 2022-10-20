import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 20 })
  role_name: string;

  @OneToMany(() => User, (user) => user.role)
  @JoinColumn({ name: "user_id" })
  users: User[];
}
