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
  readonly id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Organ, (organ) => organ.donor)
  @JoinColumn({ name: "organ_id" })
  organs: Organ[];

  @ManyToOne(() => Institution, (institution) => institution.donors)
  @JoinColumn({ name: "institution_id" })
  institution: Institution;

  @Column({ length: 45 })
  name_mother: string;

  @Column({ length: 10 })
  blood_type: string;

  @Column()
  donor_organs: boolean;

  @Column()
  donor_tissues: boolean;

  // Verificar utilidade no projeto
  // @Column()
  // image: Blob;
}
