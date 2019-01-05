import { ApiModelProperty } from '@nestjs/swagger';
export class SubstractDto {
    @ApiModelProperty({
        type: 'number',
        default: 10,
    })
    subtrahend: number;

    @ApiModelProperty()
    minuend: number;
}