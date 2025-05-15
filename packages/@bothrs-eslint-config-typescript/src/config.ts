import baseConfig from '../../@bothrs-eslint-config/src/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import typescriptConfig from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import parser from '@typescript-eslint/parser'

export default [
  ...baseConfig,
  typescriptConfig.configs.recommended,
  importPlugin.flatConfigs.typescript,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
    },
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

      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
      '@typescript-eslint/dot-notation': ['warn'],

      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_.*',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',

      // https://typescript-eslint.io/rules/consistent-type-imports/
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      // https://typescript-eslint.io/rules/consistent-type-exports/
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: false,
        },
      ],
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

      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },

  eslintConfigPrettier,
]
