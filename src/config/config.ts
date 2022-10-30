import { EMapType, IConfig } from "../type";

const config: IConfig = {
  baseUrl: "https://maponline3.bdimg.com/tile/?qt=vtile",
  mapType: EMapType.BAIDU,
  minLevel: 3,
  maxLevel: 4,
  leftTop: [113.914606, 22.534212],
  rightBottom: [113.944071, 22.510041],
  downloadPath: "",
};

export default config;
