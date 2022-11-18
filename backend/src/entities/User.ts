import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { IsEmail } from "class-validator";
import { Donor } from "./Donor";
import { Receiver } from "./Receiver";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly user_id: string;

  @OneToOne(() => Donor, (donor) => donor.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  donor: Donor;

  @OneToOne(() => Receiver, (receiver) => receiver.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  receiver: Receiver;

  @Column()
  role: string;

  @Column({ length: 150 })
  full_name: string;

  @Column()
  sex: string;

  @Column({ unique: true, length: 14 })
  cpf: string;

  @Column({ unique: true, length: 15 })
  phone: string;

  @Column({ unique: true, length: 40 })
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true, select: false, default: "" })
  avatar: string;
}
