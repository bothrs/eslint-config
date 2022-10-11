# Bothrs: ESLint configuration for NodeJS

A very opinionated ESLint configuration for NodeJS used at Bothrs.

## Usage

Install the package as a devDependency.

```
# NPM
npm i @bothrs/eslint-config-node -D

# Yarn
yarn add @bothrs/eslint-config-node -D
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
    '@bothrs/eslint-config-node',
  ],
}
```

### Plugins
