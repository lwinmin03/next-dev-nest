import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../users/user.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { UserModule } from "../users/user.module";
import { JwtStrategy } from "./jwt.strategy";

@Module({controllers:[AuthController],providers:[AuthService,JwtStrategy],
    imports:[
        UserModule,
        JwtModule.register({secret:"mySuperKey",signOptions:{
            expiresIn:'60s'
        }})
    ]
})



export class AuthModule{}