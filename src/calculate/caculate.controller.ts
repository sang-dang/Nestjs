import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CalculateService } from './caculate.service';
import { SubstractDto } from './model/add.model';
import { ApiResponse } from '@nestjs/swagger';

@Controller()

export class CalculateController {
    constructor(private calculateService: CalculateService) {}

    @Get('/:number')
    squareNumber(@Param('number') number: number) {
       return this.calculateService.square(number);
    }

    @Post('/substract')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    addNumber(@Body() req: SubstractDto) {
        return this.calculateService.substract(req);
    }
}