import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import * as argon2 from 'argon2';

@Injectable()
export class UserService{


    constructor(
        @InjectRepository(User)
        private userRepo:Repository<User>,){


            
        }

        async create(user:any):Promise<any> {
            const exist =await this.userRepo.findOne({where:{
                email:user?.email
            }})

            if(exist) throw new ConflictException('User with this email already exists');


            const hashPwd=await argon2.hash(user?.password,{type:argon2.argon2id});



            const newUser=this.userRepo.create({
                email:user?.email,
                password:hashPwd
            });



            return this.userRepo.save(newUser);




        }
}