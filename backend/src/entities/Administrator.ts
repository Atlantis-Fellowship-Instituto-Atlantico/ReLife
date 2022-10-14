import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("administrators")
export class Administrator {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "id" })
  user_id: User;
}
