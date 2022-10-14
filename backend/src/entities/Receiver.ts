import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Institution } from "./Institution";
import { Organ } from "./Organ";
import { User } from "./User";

@Entity("receivers")
export class Receiver {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "id" })
  user_id: User;

  @OneToMany(() => Organ, (organ) => organ.id)
  @JoinColumn({ name: "id" })
  organ_id: Organ[];

  @ManyToOne(() => Institution, (institution) => institution.id)
  @JoinColumn({ name: "id " })
  institution_id: Institution;

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
