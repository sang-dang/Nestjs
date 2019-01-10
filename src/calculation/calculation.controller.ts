import { CalculationService } from './calculation.service';
import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { SumDto } from './calculation';
@Controller('calculation')
export class CalculationController {
  constructor(private calculationService: CalculationService) {}
  @Get('/result')
  getAll() {
    const num = this.calculationService.getNumber();
    return { num };
  }
  @Post()
  calculate(@Body() num: SumDto) {
    num.firstNumber = +num.firstNumber;
    num.secondNumber = +num.secondNumber;
    const number = this.calculationService.calculate(num.firstNumber, num.secondNumber);
    return number;
  }
}
