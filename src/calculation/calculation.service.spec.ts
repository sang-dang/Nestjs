import { Test, TestingModule } from '@nestjs/testing';
import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;
<<<<<<< HEAD
=======

>>>>>>> 22bfb35cd1066a2f00e526a3c169c7f190d53f00
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculationService],
    }).compile();
    service = module.get<CalculationService>(CalculationService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
