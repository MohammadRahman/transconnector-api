import { Injectable } from '@nestjs/common';
import { OfficeRtlRepository } from './repository/officeRtl.repository';
import { CountryRtlRepository } from './repository/countryRtl.repository';

@Injectable()
export class RelationalOfficeService {
  constructor(
    private readonly officeRepository: OfficeRtlRepository,
    private readonly countryRepository: CountryRtlRepository,
  ) {}
  async getOffices() {
    return await this.officeRepository.find({});
  }
}
