import { CalculationService } from './calculation.service';
import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { Inumber } from 'model/number.model';

@Controller('calculation')
export class CalculationController {
  constructor(private calculationService: CalculationService) {}
  @Get('/result')
  @Render('index')
  getAll() {
    const num = this.calculationService.getNumber();
    return { num };
  }
  @Post()
  calculate(@Body() num: Inumber) {
    num.a = +num.a;
    num.b = +num.b;
    const number = this.calculationService.calculate(num.a, num.b);
    return number;
  }
}
