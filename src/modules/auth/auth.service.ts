import { Injectable } from "@nestjs/common";
import { UserService } from "../users/user.service";
import * as argon from 'argon2'
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userService:UserService,
        private jwtService:JwtService
    ){}

async validateUser(email:string,password:string):Promise<any>{
    const validate=await this.userService.find(email);

    if(!validate)  return {message:'User does not exist in chat system'};
    

    const isAuth=await argon.verify(validate?.password,password);

    if(isAuth) {
        const token=await this.generateToken(validate);

        return {
            token:token,
            user:validate
        }
    } else {
        return "Invalid Password"
    }




}



async generateToken(user:any):Promise<any>{
    const claim={sub:user?.id,email:user?.email}

    const token=await this.jwtService.sign(claim);

    return token

}


}