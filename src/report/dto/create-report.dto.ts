import { PrimaryGeneratedColumn} from "typeorm";
import {IsNumber,IsNotEmpty, IsString} from 'class-validator';

export class CreateReportDto {
    @PrimaryGeneratedColumn()
    id:number;

    @IsNotEmpty()
    @IsString()
    BusinessName:string;
   
    @IsNotEmpty()
    @IsNumber()
    Income:number;
   

    @IsNotEmpty()
    @IsNumber()
    OutCome:number;
}
