import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReportModule } from './report/report.module';



@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
     TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.POSTGRES_HOST,
      port:parseInt(<string>process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      autoLoadEntities:true,
      synchronize:true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
     UsersModule,
     TransactionModule,
     ReportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
