import { Exclude } from "class-transformer"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId:number
    
    @Column()
    email:string

    
    @Column()   
    @Exclude()
    password:string
}