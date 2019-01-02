import { ApiModelProperty } from '@nestjs/swagger';
export class SumDto {
    @ApiModelProperty()
    firstNumber: number;

    @ApiModelProperty()
    secondNumber: number;
}