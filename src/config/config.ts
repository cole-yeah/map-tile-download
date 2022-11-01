import { EMapType, IConfig } from "../type";

const config: IConfig = {
  baseUrl: "https://maponline3.bdimg.com/tile/?qt=vtile",
  mapType: EMapType.BAIDU,
  minLevel: 3,
  maxLevel: 14,
  leftTop: [113.872781, 22.722355],
  rightBottom: [114.176337, 22.508839],
  downloadPath: "./tiles",
};

export default config;
