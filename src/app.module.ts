import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/dbConfig';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,

  }),


TypeOrmModule.forRootAsync({imports:[ConfigModule],
  useFactory:dbConfig
}),

AuthModule,
UserModule


],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
