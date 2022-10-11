import type { Linter } from 'eslint'

// ------------------------------------------------------------------------- /
module.exports = {
  env: {
    jest: true,
  },
  extends: [
    '@bothrs/eslint-config',

    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',

    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
  plugins: [
    'jest', 'jest-formatting'
  ],
  rules: {
  },
} as Linter.BaseConfig
