import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./Address";
import { Donor } from "./Donor";
import { Organ } from "./Organ";
import { Receiver } from "./Receiver";
import { Role } from "./Role";

@Entity("institutions")
export class Institution {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => Role)
  @JoinColumn({ name: "role_id" })
  role: Role;

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @OneToMany(() => Organ, (organ) => organ)
  @JoinColumn({ name: "organ_id" })
  organs: Organ[]; //receber array de "organs"

  @OneToMany(() => Donor, (donor) => donor.id)
  @JoinColumn({ name: "donor_id" })
  donors: Donor[];

  @OneToMany(() => Receiver, (receiver) => receiver.id)
  @JoinColumn({ name: "receiver_id" })
  receivers: Receiver[];

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
