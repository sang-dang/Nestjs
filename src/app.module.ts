import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaculateModule } from 'calculate/calculate.module';
import { CalculationModule } from './calculation/calculation.module';

@Module({
  imports: [CaculateModule, CalculationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
