import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Institution } from "./Institution";
import { Organ } from "./Organ";
import { User } from "./User";

@Entity("receivers")
export class Receiver {
    @PrimaryGeneratedColumn()
    readonly receiver_id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    userId: User;

    @OneToMany(() => Organ, (organ) => organ.organ_id)
    @JoinColumn({ name: "organ_id" })
    organId: Organ[];

    @ManyToOne(() => Institution, (institution) => institution.institution_id)
    @JoinColumn({ name: "institution_id "})
    institutionId: Institution;

    @Column({ length: 45 })
    name_mother: string

    @Column({ length: 10 })
    blood_type: string

    @Column()
    receiver_organs: boolean

    @Column()
    receiver_tissues: boolean

    // Verificar utilidade no projeto
    // @Column()
    // image: Blob

    constructor() {
        if (!this.receiver_id) {
            this.receiver_id = uuid();
        }
    }
}