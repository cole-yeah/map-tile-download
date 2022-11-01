import axios from "axios";
import config from "./config/config";
import path from "path";
import fs from "fs";
import { calcTileCount } from "./utils";

const num: number = 1;

const { baseUrl, downloadPath } = config;

const fetchMapTile = () => {
  // const url = `${baseUrl}&x=${}&y=${}&z=${}`;
  const name = "";
  const dlPath = path.resolve(downloadPath, name);
  const writer = fs.createWriteStream(dlPath);
  return axios
    .get("https://maponline3.bdimg.com/tile/?qt=vtile&x=186&y=45&z=10", {
      responseType: "stream",
    })
    .then((res) => {
      res.data.pipe(writer);
      return new Promise((resolve, reject) => {
        writer.on("finish", resolve);
        writer.on("error", reject);
      });
    });
};

// fetchMapTile();

const cnt = calcTileCount();

console.log("count = ", cnt);
