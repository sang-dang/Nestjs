import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaculateModule } from './calculate/calculate.module';
import { CalculationModule } from './calculation/calculation.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [CaculateModule, CalculationModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
