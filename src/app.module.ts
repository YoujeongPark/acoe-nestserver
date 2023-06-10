import { Module } from '@nestjs/common';
import { CafesController } from './cafes/cafes.controller';

@Module({
  imports: [],
  controllers: [CafesController],
  providers: [],
})
export class AppModule {}
