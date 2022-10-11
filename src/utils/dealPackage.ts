import { resolve } from "path";
import { existsSync } from "fs";
import fs from "fs-extra";

/** 是否有 package.json */
export const hasPackage = () => {
  const path = resolve(process.cwd(), "package.json");
  if (existsSync(path)) {
    return true;
  } else {
    return false;
  }
};

/** 取到 package.json */
export const getPackage = () => {
  const path = resolve(process.cwd(), "package.json");
  return fs.readJSONSync(path);
};
