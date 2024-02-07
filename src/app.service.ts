import { Injectable } from '@nestjs/common';
import get from 'axios';
import { IRequest } from './interfaces/shared.interface';

@Injectable()
export class AppService {
  async getWeather(coordinates: IRequest) {
    const url = `${process.env.OP_URL}?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${process.env.OP_API_KEY}`;
    const { data } = await get(url);
    return data;
  }
}
