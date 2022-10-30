import axios from "axios";
import config from "./config/config";

const num: number = 1;

const { baseUrl } = config;

const fetchMapTile = () => {
  // const url = `${baseUrl}&x=${}&y=${}&z=${}`;
  axios
    .get("https://maponline3.bdimg.com/tile/?qt=vtile&x=186&y=45&z=10", {
      responseType: "stream",
    })
    .then((res) => {
      console.log("xxxxxx", res);
    });
};

fetchMapTile();
