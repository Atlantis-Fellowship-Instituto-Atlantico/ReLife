import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Donor } from "./Donor";
import { Institution } from "./Institution";
import { Receiver } from "./Receiver";

@Entity("organs")
export class Organ {
  @PrimaryGeneratedColumn()
  readonly organ_id: string;

  @ManyToOne(() => Institution, (institution) => institution.institution_id)
  organId: Organ;

  @ManyToOne(() => Donor, (donor) => donor.donor_id)
  donorId: Donor;
  
  @ManyToOne(() => Receiver, (receiver) => receiver.receiver_id)
  receiverId: Receiver;

  @Column({ length: 50 })
  organ_type: string;

  @Column({ length: 50 })
  description: string;

  constructor() {
    if (!this.organ_id) {
      this.organ_id = uuid();
    }
  }
}
