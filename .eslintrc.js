module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  ignorePatterns: ["coverage", "dist", "node_modules", "package-lock.json"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  root: true,
  rules: {
    "arrow-parens": 1,
    "max-params": ["error", 2],
    "no-duplicate-imports": 1,
    "no-restricted-syntax": [
      1,
      {
        selector: "ExportDefaultDeclaration",
        message: "Prefer named exports.",
      },
    ],
    "no-tabs": 1,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      1,
      {
        format: ["StrictPascalCase"],
        prefix: ["I"],
        selector: "interface",
      },
      {
        format: ["StrictPascalCase"],
        prefix: ["can", "did", "has", "is", "should", "will"],
        selector: "variable",
        types: ["boolean"],
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": 0,
  },
}
