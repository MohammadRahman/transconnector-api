import { NestFactory } from '@nestjs/core';
import { RelationalOfficeModule } from './relational-office.module';

async function bootstrap() {
  const app = await NestFactory.create(RelationalOfficeModule);
  await app.listen(4200);
}
bootstrap();
