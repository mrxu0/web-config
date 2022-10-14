module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "prettier"
  ],
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "rules": {
        "valid-jsdoc": 0
      }
    },
    {
      "files": [
        "*.vue"
      ],
      "rules": {
        "new-cap": 0
      }
    }
  ],
  "rules": {
    "valid-jsdoc": 2,
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": true,
          "FunctionExpression": true
        }
      }
    ],
    "func-names": [
      "error",
      "as-needed"
    ],
    "no-nested-ternary": 2,
    "vue/multi-word-component-names": "off"
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  }
}