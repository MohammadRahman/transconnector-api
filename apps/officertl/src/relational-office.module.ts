import { Module } from '@nestjs/common';
import { RelationalOfficeController } from './relational-office.controller';
import { RelationalOfficeService } from './relational-office.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { CountryRtlRepository } from './repository/countryRtl.repository';
import { CountryRtl } from './models/conutry.entity';
import { OfficeRtl } from './models/office.entity';
import { OfficeRtlRepository } from './repository/officeRtl.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string(),
        DB_PORT: Joi.number(),
        DB_USER: Joi.string(),
        DB_PASSWORD: Joi.string(),
        DB_NAME: Joi.string(),
        DB_SYNCHRONIZATION: Joi.boolean(),
      }),
    }),
    DatabaseModule,
    DatabaseModule.forFeature([CountryRtl, OfficeRtl]),
  ],
  controllers: [RelationalOfficeController],
  providers: [
    RelationalOfficeService,
    CountryRtlRepository,
    OfficeRtlRepository,
  ],
})
export class RelationalOfficeModule {}
