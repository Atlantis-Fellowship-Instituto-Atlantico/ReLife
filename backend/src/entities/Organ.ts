import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Donor } from "./Donor";
import { Institution } from "./Institution";
import { Receiver } from "./Receiver";

@Entity("organs")
export class Organ {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Institution, (institution) => institution.id)
  @JoinColumn({ name: "organ_id" })
  organ_id: Organ;

  @ManyToOne(() => Donor, (donor) => donor.id)
  @JoinColumn({ name: "donor_id" })
  donor_id: Donor;

  @ManyToOne(() => Receiver, (receiver) => receiver.id)
  @JoinColumn({ name: "receiver_id" })
  receiver_id: Receiver;

  @Column({ length: 50 })
  organ_type: string;

  @Column({ length: 50 })
  description: string;
}
