import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("administrators")
export class Administrator {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
