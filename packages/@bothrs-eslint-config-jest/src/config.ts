import baseConfig from '../../@bothrs-eslint-config/src/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJest from 'eslint-plugin-jest'

export default [
  ...baseConfig,
  pluginJest.configs['flat/recommended'],

  eslintConfigPrettier,
]
