import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { v4 as uuid } from "uuid"
import { Person } from "./People"

@Entity("administrators")
export class Administrator {
    @PrimaryGeneratedColumn()
    readonly administrator_id: string;

    @OneToOne(() => Person)
    @JoinColumn({ name: "person_id" })
    personId: Person;

    constructor() {
        if (!this.administrator_id) {
            this.administrator_id = uuid();
        }
      
    }
}