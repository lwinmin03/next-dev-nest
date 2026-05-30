import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { UserService } from "./user.service";

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
getUser(){
    return "User route"
}
}