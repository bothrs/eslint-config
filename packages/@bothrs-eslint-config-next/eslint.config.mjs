import { defineConfig } from 'eslint'

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

    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
])
