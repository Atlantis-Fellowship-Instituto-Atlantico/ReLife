import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./User"

@Entity("administrators")
export class Administrator {
    @PrimaryGeneratedColumn()
    readonly administrator_id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    userId: User;

    constructor() {
        if (!this.administrator_id) {
            this.administrator_id = uuid();
        }
      
    }
}