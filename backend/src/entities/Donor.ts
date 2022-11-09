import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Institution } from "./Institution";
import { Organ } from "./Organ";
import { User } from "./User";

@Entity("donors")
export class Donor {
  @PrimaryGeneratedColumn("uuid")
  readonly donor_id: string;

  @OneToOne(() => User, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Organ, (organ) => organ.donor)
  @JoinColumn({ name: "organ_id" })
  organs: Organ[];

  @ManyToOne(() => Institution, (institution) => institution.donors)
  @JoinColumn({ name: "institution_id" })
  institution: Institution;

  @Column({ nullable: true, length: 45, default: "" })
  mother_name: string;

  @Column({ nullable: true, length: 10, default: "" })
  blood_type: string;
}
