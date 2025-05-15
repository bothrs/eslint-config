import baseConfig from '../../@bothrs-eslint-config/src/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

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
  },
  eslintConfigPrettier,
]
