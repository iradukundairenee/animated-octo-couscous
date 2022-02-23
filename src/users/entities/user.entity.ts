import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from "typeorm";
import { IsNotEmpty, IsEmail, Length } from 'class-validator';

@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({
        message: 'please enter your names'
    })
    @Column({ default: null })
    names: string;



    @IsNotEmpty({
        message: 'please enter your username'
    })
    @Column({ default: null })
    username: string;

    @IsNotEmpty({
        message: 'email is required'
    })
    @IsEmail()
    @Column({ unique: false, default: null })
    email: string;

    @IsNotEmpty({
        message: 'password is required'
    })
    @Length(5, 16)
    @Column({ default: null })
    password: string;


    @Column({ default: 'user' })
    role: string;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();

    }
}

