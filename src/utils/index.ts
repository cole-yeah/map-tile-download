import config from "../config/config";
import { EMapType } from "../type";

const TileLngLatTransform = require("tile-lnglat-transform");

interface IPayload {
  // x: number;
  // y: number;
  level: number;
}

const fnNameObj = {
  [EMapType.BAIDU]: "TileLnglatTransformBaidu",
  [EMapType.GAODE]: "TileLnglatTransformGaode",
};

let tileList = new Set();
const { mapType, leftTop, rightBottom, minLevel, maxLevel } = config;
let curLevel = minLevel;

const transform = ({ level }: IPayload) => {
  const fnName = fnNameObj[mapType];
  const tool = TileLngLatTransform[fnName];
  const [left, top] = leftTop;
  const [right, bottom] = rightBottom;
  const { tileX: tileLeft, tileY: tileTop } = tool.lnglatToTile(
    left,
    top,
    level
  );
  const { tileX: tileRight, tileY: tileBottom } = tool.lnglatToTile(
    right,
    bottom,
    level
  );

  return {
    tileLeft,
    tileTop,
    tileRight,
    tileBottom,
  };
};

// 计算瓦片总数
export const calcTileCount = () => {
  let cnt = 0;
  while (curLevel <= maxLevel) {
    const { tileLeft, tileRight, tileTop, tileBottom } = transform({
      level: curLevel,
    });
    const diffX = Math.abs(tileLeft - tileRight),
      diffY = Math.abs(tileTop - tileBottom);
    let x = Math.min(tileLeft, tileRight),
      y = Math.min(tileTop, tileBottom);
    for (let i = 0; i <= diffX; i++) {
      for (let j = 0; j <= diffY; j++) {
        cnt++;
        const key = `x${x + i}y${y + j}z${curLevel}`;
        tileList.add(key);
      }
    }

    curLevel++;
  }
  return cnt;
};
