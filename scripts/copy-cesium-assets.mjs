import fs from "fs-extra";
import path from "path";

const cesiumSource =
"node_modules/cesium/Build/Cesium";

const cesiumDest =
"public/cesium";

fs.copySync(
    cesiumSource,
    cesiumDest,
    { overwrite:true }
);

console.log("Cesium copied");