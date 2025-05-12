import type { Linter } from 'eslint'
import globals from 'globals'

import baseConfig from '../../@bothrs-eslint-config/src/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  ...baseConfig,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {},
  },
  eslintConfigPrettier,
] satisfies Linter.FlatConfig[]
