import { writeFileSync } from "fs";
import { getPackage } from "../utils/dealPackage";
import { debugInfo } from "../utils/debug";

const devDependencies = {
  prettier: "^2.7.1",
};

// 生成 eslint 配置文件
function generatePrettier() {
  let text = {
    semi: true,
    tabWidth: 2,
    "jsx-single-quote": false,
    "single-quote": false,
    "arrow-parens": "always",
    bracketSpacing: true,
    endOfLine: 'lf',
  };
  writeFileSync(`${process.cwd()}/.prettierrc`, JSON.stringify(text, null, 2));
}
// 给 package.json 添加 eslint 相关依赖
function packageAdd() {
  const packageJson = getPackage();
  packageJson.devDependencies = {
    ...devDependencies,
    ...packageJson.devDependencies,
  };
  writeFileSync(
    `${process.cwd()}/package.json`,
    JSON.stringify(packageJson, null, 2)
  );
}

export function prettierAllConfig() {
  generatePrettier();
  packageAdd();
  debugInfo(
    `prettier 添加成功，新增依赖为: ${JSON.stringify(devDependencies)}`
  );
}
