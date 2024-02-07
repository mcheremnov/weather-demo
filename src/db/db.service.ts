import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeatherEntity } from './entities/weather.entity';
import { Repository } from 'typeorm';
import { IRequest } from 'src/interfaces/shared.interface';

@Injectable()
export class DbService {
  constructor(
    @InjectRepository(WeatherEntity)
    private readonly weatherRepository: Repository<WeatherEntity>,
  ) {}

  async createRow(data) {
    const newRow = this.weatherRepository.create(data);
    return this.weatherRepository.save(newRow);
  }

  async getRow(data: IRequest) {
    return await this.weatherRepository.findOne({
      where: { latitude: data.lat, longitude: data.lon },
    });
  }
}
