import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateOfficeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  country: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  latitude: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  longitude: number;
}
