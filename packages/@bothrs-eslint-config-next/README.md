# Bothrs: ESLint configuration for NextJS

A very opinionated ESLint configuration for NextJS used at Bothrs.

## Usage

Install the package as a devDependency.

```
# NPM
npm i @bothrs/eslint-config-next -D

# Yarn
yarn add @bothrs/eslint-config-next -D
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
    '@bothrs/eslint-config-next',
  ],
}
```

### Plugins

- [ESLint-CommNextents](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)
