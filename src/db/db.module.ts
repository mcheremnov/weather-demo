import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherEntity } from './entities/weather.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WeatherEntity])],
  providers: [DbService],
})
export class DbModule {}
