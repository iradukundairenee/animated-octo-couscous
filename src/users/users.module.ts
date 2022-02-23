import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module'
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync({
    useFactory :()=>({
    secret:'jwtsecret',
    signOptions:{expiresIn:'1d'},
    })

}),
  AuthModule,
],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
