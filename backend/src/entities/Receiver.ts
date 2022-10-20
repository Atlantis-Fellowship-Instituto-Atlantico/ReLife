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

@Entity("receivers")
export class Receiver {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Organ, (organ) => organ.receiver)
  @JoinColumn({ name: "organ_id" })
  organs: Organ[];

  @ManyToOne(() => Institution, (institution) => institution.receivers)
  @JoinColumn({ name: "institution_id" })
  institution: Institution;

  @Column({ length: 45 })
  name_mother: string;

  @Column({ length: 10 })
  blood_type: string;

  @Column()
  receiver_organs: boolean;

  @Column()
  receiver_tissues: boolean;

  // Verificar utilidade no projeto
  // @Column()
  // image: Blob
}
