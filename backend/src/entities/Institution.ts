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
import { Organ } from "./Organs";

@Entity("institutions")
export class Institution {
  @PrimaryGeneratedColumn()
  readonly id_institution: string;

  @OneToOne(() => AcessLevel)
  @JoinColumn({ name: "level_id" })
  levelId: AcessLevel;

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  addressId: Address;

  @OneToOne(() => Organ)
  @JoinColumn({ name: "organ_id" })
  organId: Organ;

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

  constructor() {
    if (!this.id_institution) {
      this.id_institution = uuid();
    }
  }
}
