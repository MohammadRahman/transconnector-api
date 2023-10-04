import { Module } from '@nestjs/common';
import { OfficeController } from './office.controller';
import { OfficeService } from './office.service';
import { DatabaseModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { CountryRepository } from './repository/country.repository';
import { OfficeRepository } from './repository/office.repository';
import { Office } from './models/office.entity';
import { Country } from './models/country.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Office, Country]),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number(),
        DB_HOST: Joi.string(),
        DB_PORT: Joi.number(),
        DB_USER: Joi.string(),
        DB_PASSWORD: Joi.string(),
        DB_NAME: Joi.string(),
        DB_SYNCHRONIZATION: Joi.boolean(),
      }),
    }),
  ],
  controllers: [OfficeController],
  providers: [OfficeService, CountryRepository, OfficeRepository],
})
export class OfficeModule {}
