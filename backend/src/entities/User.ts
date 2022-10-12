import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { v4 as uuid } from "uuid"
import { AcessLevel } from "./AcessLevel"
import { Address } from "./Address"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    readonly user_id: string;

    @OneToOne(() => AcessLevel)
    @JoinColumn({ name: "level_id" })
    levelId: AcessLevel;

    @OneToOne(() => Address)
    @JoinColumn({ name: "address_id" })
    addressId: Address;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45 })
    last_name: string;

    @Column({ length: 11 })
    cpf: string;

    @Column({ length: 15 })
    telephone: string;

    @Column({ length: 40 })
    email: string;

    @Column({ length: 40 })
    user: string;

    @Column({ length: 25 })
    password: string;

    @Column()
    active: boolean;

    constructor() {
        if (!this.user_id) {
            this.user_id = uuid();
        }
    }
}