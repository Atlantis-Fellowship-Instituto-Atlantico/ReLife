import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("acessLevels")
export class AcessLevel {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ length: 20 })
  acess_type: string;
}
