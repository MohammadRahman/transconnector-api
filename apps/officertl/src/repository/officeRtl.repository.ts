import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { CountryRtl } from '../models/conutry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { OfficeRtl } from '../models/office.entity';

@Injectable()
export class OfficeRtlRepository extends AbstractRepository<OfficeRtl> {
  protected readonly logger = new Logger(OfficeRtlRepository.name);

  constructor(
    @InjectRepository(CountryRtl)
    countryRepository: Repository<OfficeRtl>,
    entityManager: EntityManager,
  ) {
    super(countryRepository, entityManager);
  }
}
