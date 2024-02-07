export interface IRequest {
  latitude: number;
  longitude: number;
}

export interface IResponse {
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
}

export interface IWResult {
  coord: ICoordinate;
  weather: [IWeather];
  base: string;
  main: IMain;
  visibility: string;
  wind: IWind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: ISystem;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IData {
  latitude: number;
  longitude: number;
  data: IWResult;
}

interface ICoordinate {
  latitude: number;
  longitude: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ISystem {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
