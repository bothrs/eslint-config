# Bothrs: ESLint configuration

A very opinionated ESLint configuration used at Bothrs.

## Prerequisites

- Prettier
- Typescript

## Installation

Install the package as a devDependency.

`yarn add @bothrs/eslint-config -D`

Add the package to the `extends`-section of your eslint configuration.

Example `.eslintrc.js` file:

```
// .eslintrc.js

module.exports = {
  type: "module",
  env: {
    es6: true,
    node: true,
  },
  extends: [
    '@bothrs/eslint-config',

    // Additionally add rules for frameworks
    '@bothrs/eslint-config/jest',
    '@bothrs/eslint-config/react',
    '@bothrs/eslint-config/react-native',
  ],
  // Add parserOptions when using Typescript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
}
```

## Rules

This ESLint config is a collection of plugins and custom rules.

### Plugins

- [ESLint-Comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [ESLint-Import](https://github.com/import-js/eslint-plugin-import)
- [ESLint-Jest-Formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- [ESLint-Jest](https://github.com/jest-community/eslint-plugin-jest)
- [ESLint-No-Secrets](https://github.com/nickdeis/eslint-plugin-no-secrets)
- [ESLint-Prettier](https://github.com/prettier/prettier-eslint)
- [ESLint-React-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [ESLint-React-Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [ESLint-React-Native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y)
- [ESLint-React-Native](https://github.com/Intellicode/eslint-plugin-react-native)
- [ESLint-React](https://github.com/yannickcr/eslint-plugin-react)
- [ESLint-SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [ESLint-Typescript](https://github.com/typescript-eslint/typescript-eslint)
- [ESLint-Unused-Imports](https://github.com/sweepline/eslint-plugin-unused-imports)
- [ESLint-Woke](https://github.com/amwmedia/eslint-plugin-woke)
