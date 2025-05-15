import { defineConfig, globalIgnores } from 'eslint/config'

import baseConfig from './packages/@bothrs-eslint-config/index.mjs'
import typescriptConfig from './packages/@bothrs-eslint-config-typescript/index.mjs'

export default defineConfig([
  globalIgnores(['packages/**/node_modules']),
  {
    ...baseConfig,
    ...typescriptConfig,

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
])
