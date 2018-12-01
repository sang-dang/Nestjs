import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaculateModule } from 'calculate/calculate.module';

@Module({
  imports: [CaculateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
