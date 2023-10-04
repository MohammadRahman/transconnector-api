import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { CountryRtl } from '../models/conutry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CountryRtlRepository extends AbstractRepository<CountryRtl> {
  protected readonly logger = new Logger(CountryRtlRepository.name);

  constructor(
    @InjectRepository(CountryRtl)
    countryRepository: Repository<CountryRtl>,
    entityManager: EntityManager,
  ) {
    super(countryRepository, entityManager);
  }
}
