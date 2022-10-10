import { writeFileSync } from "fs";
import { packageConsole } from "../utils";
import { getPackage } from "../utils/dealPackage";
import { debugInfo } from "../utils/debug";

const devDependencies = {
  eslint: "^8.25.0",
  "eslint-config-prettier": "^8.5.0",
  "@typescript-eslint/parser": "^5.39.0",
  typescript: "^4.8.4",
};
const scripts = {
  // "eslint:fix": "\"{src,mock}/**/*.{vue,ts,js,tsx}\" --fix"
  "eslint:fix": 'eslint "src/**/*.{vue,ts,js,tsx}" --fix',
};

/** 生成 eslint 配置文件 */
function generateEslintConfig() {
  let text = `
module.exports = {
  root: true,
  extends: [ 'prettier' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
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
/** 给 package.json 添加 eslint 相关依赖 */
function packageAddEslint() {
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

/** 全部配置 */
export function eslintAllConfig() {
  generateEslintConfig();
  packageAddEslint();
  packageAddScript();
  packageConsole(devDependencies);
  packageConsole(scripts, ":");
}
