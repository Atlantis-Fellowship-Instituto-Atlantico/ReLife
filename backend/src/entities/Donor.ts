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

@Entity("donors")
export class Donor {
    @PrimaryGeneratedColumn()
    readonly donor_id: string;

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
    donor_organs: boolean

    @Column()
    donor_tissues: boolean

    // Verificar utilidade no projeto
    // @Column()
    // image: Blob;

    constructor() {
        if (!this.donor_id) {
            this.donor_id = uuid();
        }
    }
}