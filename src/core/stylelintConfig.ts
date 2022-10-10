import { writeFileSync } from "fs";
import { getPackage } from "../utils/dealPackage";
import { debugInfo } from "../utils/debug";
import { packageConsole } from "../utils/index";

const devDependencies = {
  "stylelint-config-recess-order": "^3.0.0",
  "stylelint": "^14.13.0",
  "stylelint-config-recommended-scss": "^7.0.0",
  "stylelint-config-recommended-vue": "^1.4.0",
};
const scripts = {
  "stylelint:fix": "stylelint \"src/**/*.{css,scss,sass,vue}\"",
};

// 生成 eslint 配置文件
function generatePrettier() {
  let text = {
    extends: ['stylelint-config-recess-order', 'stylelint-config-recommended-vue/scss'],
  };
  writeFileSync(`${process.cwd()}/.stylelint.config.js`, `module.exports = ${JSON.stringify(text, null, 2)}`);
}

// 给 package.json 添加依赖
function packageAddDep() {
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

// 给 package.json 添加修复命令
function packageAddScript() {
  const packageJson = getPackage();
  packageJson.scripts = {
    ...packageJson.scripts,
    ...scripts,
  };
  writeFileSync(
    `${process.cwd()}/package.json`,
    JSON.stringify(packageJson, null, 2)
  );
}

export function stylelintAllConfig() {
  generatePrettier();
  packageAddDep();
  packageAddScript();
  packageConsole(devDependencies);
  packageConsole(scripts, ":");
}
