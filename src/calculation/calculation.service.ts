
import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class CalculationService {
  number = [];
  getNumber() {
    return this.number;
  }
  calculate(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new HttpException('a or b is not number', 404);
    } else {
      this.number.push({ status: true, sum: a + b, substract: a - b });
      return this.number;
    }
  }
}
