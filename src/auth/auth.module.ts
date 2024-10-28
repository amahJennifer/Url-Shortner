import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { GuestOrAuthGuard } from './guards/guest-or-auth.guard';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../user/user.model';
import { AuthController } from './auth.controller';
import * as dotenv from 'dotenv';
import * as process from 'node:process';

dotenv.config()
@Module({
  imports: [SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRY_TIME },
    }),
  ],
  providers: [AuthService, GuestOrAuthGuard,UserService],
  exports: [JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
