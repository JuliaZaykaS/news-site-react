module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",

  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // typescript-eslint/parser:
  },
  // parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // "eslint dot-notation": ["error", { allowKeywords: false }],
  },
};
