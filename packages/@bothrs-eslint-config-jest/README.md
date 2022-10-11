# Bothrs: ESLint configuration for Jest

A very opinionated ESLint configuration for Jest used at Bothrs.

## Usage

Install the package as a devDependency.

```
# NPM
npm i @bothrs/eslint-config-jest -D

# Yarn
yarn add @bothrs/eslint-config-jest -D
```

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
    '@bothrs/eslint-config-jest',
  ],
}
```

### Plugins

- [ESLint-Jest-Formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- [ESLint-Jest](https://github.com/jest-community/eslint-plugin-jest)
