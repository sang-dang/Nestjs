import { Injectable } from '@nestjs/common';
import { SubstractDto } from './model/add.model';

@Injectable()
export class CalculateService {
    public square(number: number) {
        return number * number;
    }

    public substract(subtractObj: SubstractDto) {
        return subtractObj.subtrahend - subtractObj.minuend;
    }
}
