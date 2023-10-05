import { Injectable } from '@nestjs/common';
import { OfficeRtlRepository } from './repository/officeRtl.repository';
import { CountryRtlRepository } from './repository/countryRtl.repository';
import { CountryRtl } from './models/conutry.entity';

@Injectable()
export class RelationalOfficeService {
  constructor(
    private readonly officeRepository: OfficeRtlRepository,
    private readonly countryRepository: CountryRtlRepository,
  ) {}
  async getOffices() {
    return await this.officeRepository.find({});
  }
  async createCountry(createCountry: any) {
    const country = new CountryRtl(createCountry);
    return await this.countryRepository.create(country);
  }
}
