# Bothrs: ESLint configuration for React Native

A very opinionated ESLint configuration for React Native used at Bothrs.

## Usage

Install the package as a devDependency.

```
# NPM
npm i @bothrs/eslint-config-react-native -D

# Yarn
yarn add @bothrs/eslint-config-react-native -D
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
    '@bothrs/eslint-config-react-native',
  ],
}
```

### Plugins

- [ESLint-React-Native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y)
- [ESLint-React-Native](https://github.com/Intellicode/eslint-plugin-react-native)
