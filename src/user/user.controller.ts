import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RegisterUserDto } from './dtos/register-user.dto';

@ApiTags('user')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Register a new user' })
  async register(@Body() createUserDto: RegisterUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
