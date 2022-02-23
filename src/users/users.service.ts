import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { loginUserDto } from '../users/dto/login.dto'
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(
    public AuthService: AuthService,
    private jwtService: JwtService,
) { }
  async create(createUserDto: CreateUserDto) {
    const userEmail = await this.AuthService.mailExist(createUserDto.email);
    const usernameExist = await this.AuthService.usernameExist(createUserDto.username);
    if (userEmail) {
        return {
            message: "email already exist"
        };

    }
    if (usernameExist) {
        return {
            message: "username already taken"
        };

    } 
    else{
      const hashed = await bcrypt.hash(createUserDto.password, 12);
      const createUser = new User();
      createUser.names = createUserDto.names;
      createUser.username =createUserDto.username;
      createUser.email = createUserDto.email;
      createUser.password = hashed;
      createUser.save();
      const jwt = this.jwtService.sign({ id: createUser.id, email: createUser.email, password:createUser.password,role: createUser.role });
     return{
       message: "signup success",
       token:jwt
     }
    }  
  }
  async loginuser(loginUserDto: loginUserDto) {

    const user = await this.AuthService.findUserByEmail(loginUserDto.email);
    if (user[0]) {
        const valid = await this.AuthService.comparePassword(loginUserDto.password, user[0].password);
        if (valid) {
            const jwt = this.jwtService.sign({ id: user[0].id, email: user[0].email, role: user[0].role });
            return {

                message: `welcome ${user}`,
                token: jwt
            }
        } else {
            return {
                message: "incorect username or password"
            }
        }
    }
    else {
        return {
            message: "incorect username or password"
        }
    }
  }

  async findAll() {
    const users=await User.find();
    return users
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
