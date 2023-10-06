import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import {Task} from "../../tasks/entities/task.entity";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Task, (task) => task.user_id)
    task: Task[]
}
