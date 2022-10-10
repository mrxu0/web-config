import { resolve } from "path";
import { existsSync } from "fs";
import fs from "fs-extra";

export const hasPackage = () => {
  const path = resolve(process.cwd(), "package.json");
  if (existsSync(path)) {
    return true;
  } else {
    return false;
  }
};

export const getPackage = () => {
  const path = resolve(process.cwd(), "package.json");
  return fs.readJSONSync(path);
};

export const writePackage = () => {};
