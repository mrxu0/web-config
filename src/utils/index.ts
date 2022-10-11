import { resolve } from "path";
import { getPackage } from "./dealPackage";
import { debugInfo } from "./debug";

/** 对象解析为可看的打印值 */
export function packageConsole(
  obj: Record<string, string>,
  symbol: string = "@"
) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    debugInfo(`${key}${symbol}${value}`);
  });
}

/** 判断项目是否是 vue 项目 */
export function isVue() {
  const packageJson = getPackage();
  if (packageJson?.dependencies?.vue || packageJson?.devDependencies.vue) {
    return true;
  } else {
    return false;
  }
}

/** 判断项目是否是 react 项目 */
export function isReact() {
  const packageJson = getPackage();
  if (packageJson?.dependencies?.react || packageJson?.devDependencies.react) {
    return true;
  } else {
    return false;
  }
}
