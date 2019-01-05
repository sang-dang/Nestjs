import { Test, TestingModule } from '@nestjs/testing';
import { CalculationController } from './calculation.controller';

describe('Calculation Controller', () => {
  let module: TestingModule;
<<<<<<< HEAD
=======

>>>>>>> 22bfb35cd1066a2f00e526a3c169c7f190d53f00
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CalculationController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CalculationController = module.get<CalculationController>(
      CalculationController,
    );
    expect(controller).toBeDefined();
  });
});
