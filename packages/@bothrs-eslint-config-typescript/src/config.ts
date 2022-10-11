import type { Linter } from 'eslint'

// ------------------------------------------------------------------------- /
module.exports = {
  extends: [
    '@bothrs/eslint-config',

    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',

    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
  plugins: ['@typescript-eslint'],

  env: {
    es2022: true,
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        // Rules that conflict with prettier
        // --------------------------------------------------------------------
        'dot-notation': 'off', // https://eslint.org/docs/rules/dot-notation
        '@typescript-eslint/dot-notation': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md

        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',

        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        '@typescript-eslint/no-inferrable-types': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'typeLike', format: ['PascalCase'] },
          { selector: 'enum', format: ['PascalCase', 'UPPER_CASE'] },
        ],
      },
    },
  ],
} as Linter.BaseConfig
