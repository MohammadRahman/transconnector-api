import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CountryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  country: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  timezone: string;
}
