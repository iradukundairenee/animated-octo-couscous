import { Module } from '@nestjs/common';
import { AuthService} from './auth.service'
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy'
import { UsersService } from '../users/users.service';
import { JwtStrategy } from './jwt.strategy'



@Module({
  imports:[
    PassportModule,
    JwtModule.registerAsync({
      useFactory :()=>({
        secret:'jwtsecret',
        signOptions:{expiresIn:'1d'},
        })
    })
  ],
  providers: [AuthService,UsersService,LocalStrategy,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
