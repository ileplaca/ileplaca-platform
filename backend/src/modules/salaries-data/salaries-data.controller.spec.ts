import { Test, TestingModule } from '@nestjs/testing';
import { SalariesDataController } from './salaries-data.controller';
import { SalariesDataService } from './salaries-data.service';

describe('SalariesDataController', () => {
  let controller: SalariesDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalariesDataController],
      providers: [SalariesDataService],
    }).compile();

    controller = module.get<SalariesDataController>(SalariesDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
