# Bothrs: ESLint configuration for VanillaJS projects

A very opinionated ESLint configuration used at Bothrs.

## Usage

Install the package as a devDependency.

```
# NPM
npm i @bothrs/eslint-config -D

# Yarn
yarn add @bothrs/eslint-config -D
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
    '@bothrs/eslint-config',
  ],
}
```

### Plugins

- [ESLint-Comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [ESLint-Import](https://github.com/import-js/eslint-plugin-import)
- [ESLint-No-Secrets](https://github.com/nickdeis/eslint-plugin-no-secrets)
- [ESLint-Prettier](https://github.com/prettier/prettier-eslint)
- [ESLint-SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [ESLint-Woke](https://github.com/amwmedia/eslint-plugin-woke)
