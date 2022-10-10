
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
    "id-match": ["error", "^[A-Za-z_$]\w*(?<![0-9]{3,})$"],
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
  