import baseConfig from '../../@bothrs-eslint-config/src/config'

import { flatConfig as pluginNext } from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  ...baseConfig,
  pluginNext.recommended,

  {
    rules: {
      '@next/next/no-html-link-for-pages': 'error',

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
]
