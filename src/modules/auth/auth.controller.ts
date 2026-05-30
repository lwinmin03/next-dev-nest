import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {


    constructor(
        private readonly authService:AuthService
    ){}


@Post('/login')
async SignIn(@Body() user:any):Promise<any>{
    return await this.authService.validateUser(user?.email,user?.password);
}
  
    
}