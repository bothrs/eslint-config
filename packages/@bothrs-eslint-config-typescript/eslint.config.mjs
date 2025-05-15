import { defineConfig } from 'eslint/config'
import baseConfig from './index.mjs'

export default defineConfig([
  ...baseConfig,

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
])
