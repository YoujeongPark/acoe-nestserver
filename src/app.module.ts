
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { join } from 'path';
import { CatsModule } from './cats/cats.module';
import { CafesModule } from './cafes/cafes.module';
@Module({
  imports: [
    ConfigModule.forRoot({   // configuration 설정을 coifg module 불러 올 때 로드한다
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [join(__dirname, '/**/*.entity.js')],
        synchronize: true, //! set 'false' in production
        autoLoadEntities: true,
        logging: true,
        keepConnectionAlive: true,
      }),
    }),
    UsersModule,
    CatsModule,
    CafesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
