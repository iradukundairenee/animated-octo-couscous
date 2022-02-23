import { PrimaryGeneratedColumn} from "typeorm";
import {IsEmail,IsNotEmpty, IsString} from 'class-validator';
import { loginUserDto } from "./login.dto";

export class CreateUserDto extends loginUserDto {

    @PrimaryGeneratedColumn()
    id:number;
   
    @IsString()
    names:string;
   
    @IsString()
    username:string;

    @IsEmail()
    email:string;

    @IsNotEmpty()
    password:string; 

    // @IsNotEmpty()
    // role:string;

}
