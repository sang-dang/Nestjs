import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CalculateService } from './caculate.service';
import { Substract } from './model/add.model';

@Controller()

export class CalculateController {
    constructor(private calculateService: CalculateService) {}

    @Get('/:number')
    squareNumber(@Param('number') number: number) {
       return this.calculateService.square(number);
    }

    @Post('/substract')
    addNumber(@Body() req: Substract) {
        return this.calculateService.substract(req);
    }
}