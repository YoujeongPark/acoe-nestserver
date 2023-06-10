import { Module } from '@nestjs/common';
import { CafesController } from './cafes/cafes.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [CafesController],
  providers: [],
})
export class AppModule {}
