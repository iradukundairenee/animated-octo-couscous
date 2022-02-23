import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('report')
export class Report extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    BusinessName:string;
   
    @Column({ default: null })
    Income:number;
   

    @Column({ default: null })
    OutCome:number;
}
