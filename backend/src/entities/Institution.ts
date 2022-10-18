import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { AcessLevel } from "./AcessLevel";
import { Address } from "./Address";
import { Donor } from "./Donor";
import { Organ } from "./Organ";
import { Receiver } from "./Receiver";

@Entity("institutions")
export class Institution {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => AcessLevel)
  @JoinColumn({ name: "level_id" })
  level_id: AcessLevel;

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address_id: Address;

  @OneToMany(() => Organ, (organ) => organ.id)
  @JoinColumn({ name: "organ_id" })
  organ_id: Organ[]; //receber array de "organs"

  // @OneToMany(() => Donor, (donor) => donor.id)
  // @JoinColumn({ name: "donor_id" })
  // donor_id: Donor[];

  // @OneToMany(() => Receiver, (receiver) => receiver.id)
  // @JoinColumn({ name: "receiver_id" })
  // receiver_id: Receiver[];

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
  isActive: boolean;
}
