import { Injectable } from '@nestjs/common';
import { Substract } from './model/add.model';

@Injectable()
export class CalculateService {
    public square(number: number) {
        return number * number;
    }

    public substract(subtractObj: Substract) {
        return subtractObj.subtrahend - subtractObj.minuend;
    }
}
