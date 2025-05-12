import type { Linter } from 'eslint'
import globals from 'globals'

import baseConfig from '../../@bothrs-eslint-config/src/config'
import pluginNext from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  ...baseConfig,
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.es2021,
      },
    },
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            res: false,
            req: false,
          },
        },
      ],
    },
  },
  {
    files: ['pages/*', 'pages/api/*'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  eslintConfigPrettier,
] satisfies Linter.FlatConfig[]
