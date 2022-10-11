import type { Linter } from 'eslint'

// ------------------------------------------------------------------------- /
module.exports = {
  env: {
    es2022: true,
  },
  extends: [
    '@bothrs/eslint-config',

    'plugin:@next/next/core-web-vitals',

    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
  rules: {
  },
} as Linter.BaseConfig
