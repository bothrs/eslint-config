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
        // START: Handled by the typescript plugin
        'dot-notation': 'off',
        'no-unused-vars': 'off',
        // END: Handled by the typescript plugin

        '@typescript-eslint/dot-notation': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md

        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',

        // https://typescript-eslint.io/rules/consistent-type-imports/
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports'
        }],
        // https://typescript-eslint.io/rules/consistent-type-exports/
        '@typescript-eslint/consistent-type-exports': ['error', {
          fixMixedExportsWithInlineTypeSpecifier: false,
        }],
        // https://typescript-eslint.io/rules/consistent-type-definitions
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

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
