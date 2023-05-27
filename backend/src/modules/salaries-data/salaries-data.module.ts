import { Module } from '@nestjs/common';
import { SalariesDataService } from './salaries-data.service';
import { SalariesDataController } from './salaries-data.controller';

@Module({
  controllers: [SalariesDataController],
  providers: [SalariesDataService]
})
export class SalariesDataModule {}
