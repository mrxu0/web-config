import { resolve } from "path";
import { debugInfo } from "./debug";

/** 对象解析为可看的打印值 */
export function packageConsole(obj: Record<string, string>, symbol: string = '@') {
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    debugInfo(`${key}${symbol}${value}`)
  })
}