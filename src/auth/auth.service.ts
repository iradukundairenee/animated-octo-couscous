import { Injectable } from '@nestjs/common';
import {User} from '../users/entities/user.entity'
import { loginUserDto } from '../users/dto/login.dto'
import {CreateUserDto} from '../users/dto/create-user.dto'


const bcrypt =require('bcrypt');

@Injectable()
export class AuthService {
    async hashPassword(password:string,){
        return await  bcrypt.hash(password,12);
    }
    async comparePassword(password:string,strorePasswordHash:string){
        return  bcrypt.compare(password,strorePasswordHash);
    }

    async mailExist(email:string){
        return await User.findOne({email})
        }

     async usernameExist(username:string){
            return await User.findOne({username})
            }

            async username(username:string){
                return await User.find({username})
                }
    
    async validatepasword(password:string){
        
        return await User.findOne({password})

    }

async findUserByEmail(email){
    return await User.find({
        where:[
            {
                email
            }
        ]
    })
}
    

        
}
