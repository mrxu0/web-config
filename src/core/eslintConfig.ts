import { writeFileSync } from "fs";
import { getPackage } from "../utils/dealPackage";

// 生成 eslint 配置文件
function generateEslintConfig() {
  let text = `
module.exports = {
  root: true,
  extends: [ 'prettier' ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "valid-jsdoc": 0,
      },
    },
    {
      files: ["*.vue"],
      rules: {
        "new-cap": 0,
      },
    },
  ],
  rules: {
    "id-match": ["error", "^[A-Za-z_$]\\w*(?<![0-9]{3,})$"],
    "valid-jsdoc": 2,
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    "func-names": ["error", "as-needed"],
    "no-nested-ternary": 2,
  },
};
  `;
  writeFileSync(`${process.cwd()}/.eslintrc.js`, text);
}
// 给 package.json 添加 eslint 相关依赖
function packageAddEslint() {
  const deps = { eslint: "^8.25.0", "eslint-config-prettier": "^8.5.0" };
  const packageJson = getPackage();
  packageJson.dependencies = { ...deps, ...packageJson.dependencies};
  writeFileSync(`${process.cwd()}/.package.json`, JSON.stringify(packageJson, null, 2));
}

export function eslintAllConfig() {
  generateEslintConfig();
  packageAddEslint();
}
