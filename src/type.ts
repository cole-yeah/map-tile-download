export enum EMapType {
  BAIDU = "BAIDU",
  GAODE = "GAODE",
}

export type TCoordinate = [number, number];

export interface IConfig {
  mapType: EMapType;
  minLevel: number;
  maxLevel: number;
  leftTop: TCoordinate;
  rightBottom: TCoordinate;
  downloadPath: string;
  baseUrl: string;
}
