module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        paths: ["."],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        typescript: {
          "project": "packages/*/tsconfig.json",
        },
      },
    },
  },
  rules: {
    "@typescript-eslint/no-shadow": "warn",
    "import/no-named-as-default": 0,
    "no-console": "error",
    "no-shadow": "off",
    quotes: 0,
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
