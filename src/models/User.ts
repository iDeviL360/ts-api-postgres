import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({
    name: "users"
})
export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn({
        name: "user_id"
    })
    userId : number;
    
    @Column({
        name: "name"
    })
    name : string;
    
      
}