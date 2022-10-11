# Bothrs: ESLint configuration for React

A very opinionated ESLint configuration for React used at Bothrs.

## Usage

Install the package as a devDependency.

```
# NPM
npm i @bothrs/eslint-config-react -D

# Yarn
yarn add @bothrs/eslint-config-react -D
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
    '@bothrs/eslint-config-react',
  ],
}
```

### Plugins

- [ESLint-React-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [ESLint-React-Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [ESLint-React](https://github.com/yannickcr/eslint-plugin-react)
