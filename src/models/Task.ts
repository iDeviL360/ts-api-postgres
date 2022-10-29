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

    @ManyToOne((type) => User, {
        eager: true //propiedad que sirve para obtener los valores de la tabla del valor referenciado
    })
    @JoinColumn({
        name: "user_id",
        referencedColumnName: "userId"
    })
    user : User;

    

}