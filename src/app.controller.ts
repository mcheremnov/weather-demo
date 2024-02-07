import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { IRequest } from './interfaces/shared.interface';
import { DbService } from './db/db.service';
import { DataTransformInterceptor } from './interceptors/data-transform.interceptor';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DbService,
  ) {}

  @Get()
  @UseInterceptors(new DataTransformInterceptor())
  async getWeather(@Query() lat: number, @Query() lon: number) {
    return await this.dbService
      .getRow({ latitude: lat, longitude: lon })
      .catch((error) => console.log(error));
  }

  @Post()
  async postWeather(request: IRequest) {
    const weatherData = await this.appService.getWeather(request);
    return this.dbService.createRow({
      latitude: request.latitude,
      longitude: request.longitude,
      data: weatherData,
    });
  }
}
