import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('/user')
export class UserController {


constructor(
    private readonly userService:UserService
){}



@Post()
@HttpCode(200)
async registerUser(@Body() user:any){
    return this.userService.create(user);
}


@Get()
@UseGuards(JwtAuthGuard)
async getAllUsers(){
    return this.userService.findAll()
}
}