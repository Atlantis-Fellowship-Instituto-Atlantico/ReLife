import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail } from "class-validator";

@Entity("admins")
export class Admin {
  @PrimaryGeneratedColumn("uuid")
  readonly admin_id: string;

  @Column({ default: "ADMIN" })
  role: string;

  @Column({ unique: true, length: 15 })
  phone: string;

  @Column({ unique: true, length: 40 })
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
