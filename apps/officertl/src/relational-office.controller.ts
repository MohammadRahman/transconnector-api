import { Controller, Get } from '@nestjs/common';
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
}
