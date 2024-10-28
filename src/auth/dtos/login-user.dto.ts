import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user attempting to log in',
  })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @ApiProperty({
    example: 'yourPassword123',
    description: 'The password of the user attempting to log in',
  })
  @IsString({ message: 'Password must be a string' })
  password: string;
}
