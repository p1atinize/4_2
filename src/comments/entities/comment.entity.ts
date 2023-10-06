import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Task} from "../../tasks/entities/task.entity";

@Entity()

export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task_id: number;

    @ManyToOne(() => Task, (task) => task.comments, {eager: true})
    task: Task[]

    @Column()
    text: string;

    @Column({
        type: 'datetime'
    })
    changed_at: Date
}
