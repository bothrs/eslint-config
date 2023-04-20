import type { Linter } from 'eslint'

// ------------------------------------------------------------------------- /
module.exports = {
  env: {
    es2022: true,
  },
  extends: [
    '@bothrs/eslint-config',

    'plugin:@next/next/core-web-vitals',

    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
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
  overrides: [
    // Next.js needs default exports for pages and API points
    {
      files: ['pages/*', 'pages/api/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
} as Linter.BaseConfig
