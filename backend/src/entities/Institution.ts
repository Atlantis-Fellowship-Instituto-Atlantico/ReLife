import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { AcessLevel } from "./AcessLevel";
import { Address } from "./Address";
import { Organ } from "./Organ";

@Entity("institutions")
export class Institution {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => AcessLevel)
  @JoinColumn({ name: "id" })
  level_id: AcessLevel;

  @OneToOne(() => Address)
  @JoinColumn({ name: "id" })
  address_id: Address;

  @OneToMany(() => Organ, (organ) => organ.id)
  @JoinColumn({ name: "id" })
  organ_id: Organ[]; //receber array de "organs"

  @Column({ length: 100 })
  institution_name: string;

  @Column({ length: 150 })
  responsible_name: string;

  @Column({ length: 20 })
  cnpj: string;

  @Column({ length: 15 })
  telephone: string;

  @Column({ length: 40 })
  email: string;

  @Column({ length: 25 })
  password: string;

  @Column()
  active: boolean;
}
