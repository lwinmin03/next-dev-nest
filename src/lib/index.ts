import { HttpStatus } from "@nestjs/common";

interface IResponseDto<T> {
    status:string,
    statusCode:number,
    message:string,
    data:T,
    error?:{
        message:string
    }
}


export class ApiResponse<T> implements IResponseDto<T> {
data: T;
message: string;
error?: IResponseDto<T>['error']
status: string;
statusCode: number;



static success<T>(
data:T,statusCode:number
) :IResponseDto<T>{
    return {
        data:data,
        message:"Request Success",
        status:'success',
        statusCode:statusCode,
    }
}




}




