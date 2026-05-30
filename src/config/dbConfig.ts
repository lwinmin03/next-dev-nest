import path from "path";
import { PostgresDataSourceOptions } from "typeorm/driver/postgres/PostgresDataSourceOptions.js";

export default ():PostgresDataSourceOptions=>{
    return {
        type:'postgres',
        url:process.env.DB_URL,
        synchronize:true,
        logging:true,
        ssl:{
            rejectUnauthorized:false
        },
        
        entities:[path.join(__dirname,'..','**','*.entity.{ts,js}')]
    }
}