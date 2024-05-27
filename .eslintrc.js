module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    "unused-imports",
    "simple-import-sort"
  ],
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksConditionals": true,
        "checksVoidReturn": {
          "arguments": false,
          "attributes": true,
          "properties": true,
          "returns": true,
          "variables": true
        },
        "checksSpreads": true
      }
    ],
    "@typescript-eslint/naming-convention": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "no-labels": "error",
    "eqeqeq": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "generic"
      }
    ],
    "import/export": [
      "off"
    ],
    "@typescript-eslint/no-redeclare": [
      "off"
    ]
  },
};
