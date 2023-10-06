import {Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import {Comment} from "../../comments/entities/comment.entity";
import {User} from "../../users/entities/user.entity";

@Entity()

export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @OneToOne(() => User )
    user: User

    @Column()
    name: string;

    @OneToMany(type => Comment, comment => comment.task_id)
    comments: Comment[]
}
