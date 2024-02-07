import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IRequest } from './interfaces/shared.interface';
import { DbService } from './db/db.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DbService,
  ) {}

  @Post()
  async postWeather(request: IRequest) {
    const weatherData = await this.appService.getWeather(request);
    return this.dbService.createRow({
      latitude: request.lat,
      longitude: request.lon,
      data: weatherData,
    });
  }
}
