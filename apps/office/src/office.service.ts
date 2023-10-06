import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { Office } from './models/office.entity';
import { CountryDto } from './dto/country.dto';
import { Country } from '../../../libs/common/src/models/country.entity';
import { COUNTRIES, HelpersService, PRIVATE } from '@app/common';
import { getDistance } from 'geolib';
import { OfficeRepository } from './repository/office.repository';
import { CountryRepository } from './repository/country.repository';
import tzlookup from 'tz-lookup';

@Injectable()
export class OfficeService {
  constructor(
    private readonly officeRepository: OfficeRepository,
    private readonly countryRepository: CountryRepository,
    private readonly helperService: HelpersService,
  ) {}

  async create(createOfficeDto: CreateOfficeDto) {
    await this.validateCountry(createOfficeDto.country);
    const office = new Office(createOfficeDto);
    return this.officeRepository.create(office);
  }

  async getOffice() {
    return await this.officeRepository.find({});
  }

  async getCountry() {
    return await this.countryRepository.find({});
  }

  async deleteOffice(name: string) {
    const isAuthorized = this.helperService.validateDeleteAuthorization(name);
    if (isAuthorized) {
      return { message: 'Not authorized' };
    }
    return await this.officeRepository.findOneAndDelete({ name });
  }

  async createCountry(createCountry: CountryDto) {
    await this.validateCreateOfficeDto(createCountry);
    const country = new Country(createCountry);
    return this.countryRepository.create(country);
  }

  async deleteCountry(name: any) {
    await this.validateDeleteCountry(name);
    return await this.countryRepository.findOneAndDelete({ country: name });
  }

  async getOfficesInCountryWithDetails(countryDto: any) {
    const officesInCountriy = await this.officeRepository.find({
      country: countryDto,
    });
    if (officesInCountriy.length === 0) {
      return { message: `no offices found in ${countryDto}` };
    }
    const officesWithDetails = officesInCountriy.map((country) => {
      const distance = getDistance(
        {
          latitude: 58.376185,
          longitude: 26.727048,
        },
        { latitude: country.latitude, longitude: country.longitude },
      );
      let localtime;
      // console.log(country.latitude, country.longitude);
      const timezone = tzlookup(country.latitude, country.longitude);
      if (timezone) {
        const currentUtcTime = new Date();
        localtime = currentUtcTime.toLocaleString('en-US', {
          timeZone: timezone,
        });
      }
      return {
        name: country.name,
        city: country.city,
        distance: (distance / 1000).toFixed(1) + 'km',
        localtime,
      };
    });
    return officesWithDetails;
  }
  async uploadSampleCountry() {
    return await this.helperService.generateCountries(this.countryRepository);
  }
  private async validateCreateOfficeDto(createCountryDto: CountryDto) {
    try {
      await this.countryRepository.findOne({
        country: createCountryDto.country,
      });
    } catch (err) {
      return;
    }
    throw new UnprocessableEntityException('Country already exists.');
  }
  private async validateCountry(createCountryDto: CountryDto['country']) {
    try {
      await this.countryRepository.findOne({
        country: createCountryDto,
      });
    } catch (error) {
      throw new UnprocessableEntityException('Country does not exists.');
    }
  }
  private async validateDeleteCountry(name) {
    try {
      await this.officeRepository.findOne({
        country: name,
      });
    } catch (err) {
      return;
    }
    throw new UnprocessableEntityException('Can not perform delete operation.');
  }
}
