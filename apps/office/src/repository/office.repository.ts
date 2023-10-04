import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Office } from '../models/office.entity';

@Injectable()
export class OfficeRepository extends AbstractRepository<Office> {
  protected readonly logger = new Logger(OfficeRepository.name);

  constructor(
    @InjectRepository(Office)
    officeRepository: Repository<Office>,
    entityManager: EntityManager,
  ) {
    super(officeRepository, entityManager);
  }
}
