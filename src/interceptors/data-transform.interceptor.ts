import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { IWResult } from 'src/interfaces/shared.interface';

@Injectable()
export class DataTransformInterceptor implements NestInterceptor {
  constructor() {}

  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((source) => this.transformData(source)));
  }

  private transformData(data: IWResult) {
    return {
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
    };
  }
}
