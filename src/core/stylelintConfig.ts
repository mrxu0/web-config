import { writeFileSync } from "fs";
import { getPackage } from "../utils/dealPackage";
import { debugInfo } from "../utils/debug";
import { isProject, packageConsole } from "../utils/index";

const devDependencies: Record<string, string> = {
  "stylelint-config-recess-order": "^3.0.0",
  "postcss-html": "^1.5.0",
  stylelint: "^14.13.0",
};
let text = {
  extends: ["stylelint-config-recess-order"],
  rules: {
    "no-empty-source": null,
  },
};
const scripts = {
  "stylelint:fix": 'stylelint "src/**/*.{css,scss,sass,less,vue}" --fix',
};

if (isProject("scss")) {
  devDependencies["stylelint-config-recommended-scss"] = "^7.0.0";
  text.extends.push("stylelint-config-recommended-scss");
  if (isProject("vue")) {
    devDependencies["stylelint-config-recommended-vue"] = "^1.4.0";
    text.extends.push("stylelint-config-recommended-vue/scss");
  }
}

// if (isProject("less")) {
//   devDependencies["stylelint-config-recommended-less"] = "^1.0.4";
//   text.extends.push("stylelint-config-recommended-less");
//   if (isProject("vue")) {
//     devDependencies["stylelint-config-recommended-vue"] = "^1.4.0";
//     text.extends.push("stylelint-config-recommended-vue/less");
//   }
// }

if (isProject("vue")) {
  devDependencies["stylelint-config-recommended-vue"] = "^1.4.0";
  text.extends.push("stylelint-config-recommended-vue");
}

/** 生成 stylelint 配置文件 */
function generatePrettier() {
  writeFileSync(
    `${process.cwd()}/stylelint.config.js`,
    `module.exports = ${JSON.stringify(text, null, 2)}`
  );
}

/** 给 package.json 添加依赖 */
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

/** 给 package.json 添加修复命令 */
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

/** 所有配置 */
export function stylelintAllConfig() {
  generatePrettier();
  packageAddDep();
  packageAddScript();
  packageConsole(devDependencies);
  packageConsole(scripts, ":");
}
