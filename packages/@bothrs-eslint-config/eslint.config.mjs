import { defineConfig } from 'eslint'

import baseConfig from './index.mjs'

export default defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      globals: {},
      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
])
