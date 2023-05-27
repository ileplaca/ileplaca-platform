import { Test, TestingModule } from '@nestjs/testing';
import { SalariesDataService } from './salaries-data.service';

describe('SalariesDataService', () => {
  let service: SalariesDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalariesDataService],
    }).compile();

    service = module.get<SalariesDataService>(SalariesDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
