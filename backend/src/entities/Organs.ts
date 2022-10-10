import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("organs")
export class Organ {
  @PrimaryGeneratedColumn()
  readonly organ_id: string;

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
