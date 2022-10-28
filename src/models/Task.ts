import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, BaseEntity } from "typeorm";
import { User } from "./User";

@Entity({
    name: "tasks"
})
export class Task extends BaseEntity {


    @PrimaryGeneratedColumn({ name: "task_id" })
    taskId  : number;

    @Column({ name: "title" })
    title : string;
    
    @Column({ name: "description" })
    description : string;

    @Column({ name: "user_id" })
    @ManyToOne(type => User, {
        cascade: true
    })
    @JoinColumn({
        name: "user_id",
        referencedColumnName: "userId"
    })
    user : User;

    

}