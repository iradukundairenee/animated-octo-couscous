import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { IsNotEmpty} from 'class-validator';

@Entity('transaction')
export class Transaction extends BaseEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    Name:string;

    @IsNotEmpty({
        message: 'please enter service'
    })
    @Column({ default: null })
    service:string;


    @IsNotEmpty({
        message: 'please enter Amount'
    })
    @Column({ default: null })
    Amount: number;

}
