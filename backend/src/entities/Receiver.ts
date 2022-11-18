import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Address } from "./Address";
import { Institution } from "./Institution";
import { Organ } from "./Organ";
import { User } from "./User";

@Entity("receivers")
export class Receiver {
  @PrimaryGeneratedColumn("uuid")
  readonly receiver_id: string;

  @OneToOne(() => User, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Address, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "address_id" })
  address: Address;

  @OneToMany(() => Organ, (organ) => organ.receiver)
  @JoinColumn({ name: "organ_id" })
  organs: Organ[];

  @ManyToOne(() => Institution, (institution) => institution.receivers)
  @JoinColumn({ name: "institution_id" })
  institution: Institution;

  @Column({ nullable: true, length: 45, default: "" })
  mother_name: string;

  @Column({ nullable: true, length: 10, default: "" })
  blood_type: string;
}
