import { Body, Controller, Get, Post } from '@nestjs/common';
import { RelationalOfficeService } from './relational-office.service';

@Controller()
export class RelationalOfficeController {
  constructor(
    private readonly relationalOfficeService: RelationalOfficeService,
  ) {}
  @Get('offices')
  async getOffices() {
    return await this.relationalOfficeService.getOffices();
  }
  @Post('office')
  async createCountry(@Body() createCountry: any) {
    return await this.relationalOfficeService.createCountry(createCountry);
  }
}
