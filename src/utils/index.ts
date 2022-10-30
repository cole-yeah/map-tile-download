import config from "../config/config";
import { EMapType } from "../type";

const TileLngLatTransform = require("tile-lnglat-transform");

interface IPayload {
  x: number;
  y: number;
  level: number;
}

const fnNameObj = {
  [EMapType.BAIDU]: "TileLnglatTransformBaidu",
  [EMapType.GAODE]: "TileLnglatTransformGaode",
};

// const

const transform = ({ x, y, level }: IPayload) => {
  const { mapType, leftTop, rightBottom, minLevel } = config;
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
