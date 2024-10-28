import { IsString, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class ShortenUrlDto {
  @ApiProperty({
    description: 'Url description',
  })
  @IsString()
  @IsUrl({}, { message: 'The long URL must be a valid URL' })
  longUrl: string;

  @IsOptional()
  @IsString()
  customUrl?: string;
}
