import { Module } from '@nestjs/common';
import { CafesService } from './cafes.service';
import { CafesController } from './cafes.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CafeEntity } from './entities/cafe.entity'

@Module({
  imports:[TypeOrmModule.forFeature([CafeEntity])],
  controllers: [CafesController],
  providers: [CafesService]
})
export class CafesModule {}
