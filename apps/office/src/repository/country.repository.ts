import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Country } from '../../../../libs/common/src/models/country.entity';

@Injectable()
export class CountryRepository extends AbstractRepository<Country> {
  protected readonly logger = new Logger(CountryRepository.name);

  constructor(
    @InjectRepository(Country)
    countryRepository: Repository<Country>,
    entityManager: EntityManager,
  ) {
    super(countryRepository, entityManager);
  }
}
