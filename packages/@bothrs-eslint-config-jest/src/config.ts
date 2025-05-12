import type { Linter } from 'eslint'
import globals from 'globals'

import baseConfig from '../../@bothrs-eslint-config/src/config'

import pluginJest from 'eslint-plugin-jest'
import pluginJestFormatting from 'eslint-plugin-jest-formatting'
import eslintConfigPrettier from 'eslint-config-prettier'

// ------------------------------------------------------------------------- //
export default [
  ...baseConfig,

  {
    files: [
      '**/*.{spec,test}.{js,jsx,ts,tsx}',
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: pluginJest,
      'jest-formatting': pluginJestFormatting,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      ...pluginJestFormatting.configs.recommended.rules,
    },
  },

  eslintConfigPrettier, // Must be last to override other formatting rules
] satisfies Linter.FlatConfig[]
