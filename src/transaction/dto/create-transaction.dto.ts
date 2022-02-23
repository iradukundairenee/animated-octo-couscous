import { PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty, IsNumber,IsString} from 'class-validator';
export class CreateTransactionDto {
    @PrimaryGeneratedColumn()
    id:number;

    @IsNotEmpty()
    @IsString()
    Name:string;
   
    @IsNotEmpty()
    @IsString()
    service:string;
   

    @IsNotEmpty()
    @IsNumber()
    Amount:number;
}
