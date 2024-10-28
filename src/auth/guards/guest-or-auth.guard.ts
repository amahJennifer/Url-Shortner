import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import * as process from 'node:process';
dotenv.config()
@Injectable()
export class GuestOrAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = await this.jwtService.verifyAsync(token,{secret:process.env.JWT_SECRET});
        request.user = decoded;
        return true;
      } catch(error) {
        throw new UnauthorizedException();
      }
    }
    return true;
  }
}
