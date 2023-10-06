import { Injectable } from '@nestjs/common';
import { COUNTRIES, PRIVATE } from '../staticData';
import { Country } from '../models';

@Injectable()
export class HelpersService {
  async generateCountries(countryRepository) {
    const numberOfCountriesToSeed = COUNTRIES.length;
    const generatedUsers: Country[] = [];
    for (let i = 0; i < numberOfCountriesToSeed; i++) {
      const country = COUNTRIES[i];
      const newCountry = new Country(country);
      const createdCountry = await countryRepository.create(newCountry);
      generatedUsers.push(createdCountry);
    }
    return generatedUsers;
  }
  validateDeleteAuthorization(name: string) {
    const formatedName = name.replace(' ', '').toLowerCase();
    return PRIVATE.find((d) =>
      d.name.replace(' ', '').toLowerCase().includes(formatedName),
    );
  }
}
