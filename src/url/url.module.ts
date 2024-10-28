import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { Url } from './url.model';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Url,User])],
  providers: [UrlService,JwtService,AuthService,UserService],
  controllers: [UrlController],
})
export class UrlModule {}
