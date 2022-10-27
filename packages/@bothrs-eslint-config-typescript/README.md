# Bothrs: ESLint configuration for Typescript

A very opinionated ESLint configuration for Typescript used at Bothrs.

## Usage

Install the package as a devDependency.

```
# NPM
npm i @bothrs/eslint-config-typescript -D

# Yarn
yarn add @bothrs/eslint-config-typescript -D
```

Add the package to the `extends`-section of your eslint configuration.

When using the typescript configuration, your `eslintrc` file should extend `.ts`

Example `.eslintrc.ts` file:

```
// .eslintrc.js

module.exports = {
  type: "module",
  env: {
    es6: true,
    node: true,
  },
  extends: [
    '@bothrs/eslint-config-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json', // Be sure to define the project!
  }
}
```

### Plugins

- [ESLint-Typescript](https://github.com/typescript-eslint/typescript-eslint)
