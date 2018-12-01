import { Module } from '@nestjs/common';
import { CalculateController } from './caculate.controller';
import { CalculateService } from './caculate.service';

@Module({
    imports: [],
    controllers: [CalculateController],
    providers: [CalculateService],
})
export class CaculateModule {}
