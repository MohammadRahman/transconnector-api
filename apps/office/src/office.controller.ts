import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OfficeService } from './office.service';
import { CountryDto } from './dto/country.dto';
import { CreateOfficeDto } from './dto/create-office.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class OfficeController {
  constructor(private readonly officeService: OfficeService) {}
  @ApiTags('office')
  @Get('office')
  @ApiResponse({
    status: 201,
    description: 'Will return all the offices.',
  })
  async getOffice() {
    return await this.officeService.getOffice();
  }
  @ApiTags('office')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Post('office')
  async create(@Body() createOfficeDto: CreateOfficeDto) {
    return await this.officeService.create(createOfficeDto);
  }
  @ApiTags('office')
  @Delete('office/:name')
  @ApiParam({ name: 'name', description: 'Example: Office 1' })
  @ApiResponse({
    status: 201,
    description: 'Will delete office except(Office 1 - Office 10).',
  })
  async deleteOffice(@Param('name') name: CreateOfficeDto['name']) {
    return await this.officeService.deleteOffice(name);
  }
  @ApiTags('office')
  @Get('office/:country')
  @ApiParam({ name: 'country', description: 'Example: Estonia' })
  @ApiResponse({
    status: 201,
    description:
      'Will return all the offices in a specific country, with name,city,localtime, and distance',
  })
  async getOffices(@Param('country') country: CountryDto['country']) {
    return await this.officeService.getOfficesInCountryWithDetails(country);
  }
  @ApiTags('country')
  @Get('country')
  @ApiResponse({
    status: 201,
    description: 'Will return all the countries',
  })
  async getCountries() {
    return await this.officeService.getCountry();
  }

  @ApiTags('country')
  @Post('country')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async createCountry(@Body() createCountryDto: CountryDto) {
    return await this.officeService.createCountry(createCountryDto);
  }
  @ApiTags('country')
  @Delete('country/:name')
  @ApiParam({ name: 'name', description: 'Example: Estonia' })
  @ApiResponse({
    status: 201,
    description: 'Will remove a country has no offices',
  })
  async deleteCountry(@Param('name') name: CountryDto['country']) {
    return await this.officeService.deleteCountry(name);
  }
}
