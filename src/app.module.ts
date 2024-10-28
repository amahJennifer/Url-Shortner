import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './url/url.module';
import { SequelizeModule } from '@nestjs/sequelize';
import mysql2 from 'mysql2/promise';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';


dotenv.config()

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    dialectModule: mysql2,
    host: process.env.MYSQL_HOST,
    port: 3307,
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
    autoLoadModels: true,
    synchronize: true,
  }),UrlModule,UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
