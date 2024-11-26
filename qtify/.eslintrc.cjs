module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  plugins: ["eslint-plugin-prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
        paths: ["src"],
      },
    },
  },
  rules: {
    semi: "off",
    "default-case": [
      "error",
      {
        commentPattern: "^no default$",
      },
    ],
    "no-new-wrappers": 0,
    "no-mixed-operators": 0,
    "require-atomic-updates": "off",
    "comma-dangle": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-unescaped-entities": 0,
    "react/display-name": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-useless-escape": 0,
    "no-console": 0,
    "no-debugger": 0,
    "no-empty": 0,
    "linebreak-style": 0,
    "import/first": 0,
    "import/imports-first": 0,
    "no-shadow": 0,
    "disable-next-line": 0,
    "no-case-declarations": 0,
  },
};
