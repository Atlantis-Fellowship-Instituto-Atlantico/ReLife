import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("acessLevels")
export class AcessLevel {
  @PrimaryGeneratedColumn()
  readonly level_id: string;

  @Column({ length: 20 })
  acess_type: string;

  constructor() {
    if (!this.level_id) {
      this.level_id = uuid();
    }
  }
}
