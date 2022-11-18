import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Donor } from "./Donor";
import { Institution } from "./Institution";
import { Receiver } from "./Receiver";

@Entity("organs")
export class Organ {
  @PrimaryGeneratedColumn("uuid")
  readonly organ_id: string;

  @ManyToOne(() => Donor, (donor) => donor.organs)
  @JoinColumn({ name: "donor_id" })
  donor: Donor;

  @ManyToOne(() => Receiver, (receiver) => receiver.organs)
  @JoinColumn({ name: "receiver_id" })
  receiver: Receiver;

  @Column({ length: 50 })
  organ_type: string;

  @Column({ unique: true, length: 50 })
  description: string;
}
