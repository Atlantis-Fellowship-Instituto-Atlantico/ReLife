import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("orgaos")
export class Orgaos {
  @PrimaryGeneratedColumn()
  id_orgao: number;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 50 })
  descricao: string;
}
