module.exports = {
  rules: {
    'import/default': 'off',
    'import/no-default-export': ['warn'],
    'import/no-named-as-default-member': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        pathGroups: [
          {
            pattern: '~*',
            group: 'internal',
          },
          {
            pattern: '~*/**',
            group: 'internal',
          },
        ],
        groups: [
          ['external', 'builtin'],
          'internal',
          'index',
          'parent',
          'sibling',
          'object',
          'type',
        ],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          '@fortawesome/free-brands-svg-icons',
          '@fortawesome/free-regular-svg-icons',
          '@fortawesome/free-solid-svg-icons',
          '@fortawesome/pro-duotone-svg-icons',
          '@fortawesome/pro-light-svg-icons',
          '@fortawesome/pro-regular-svg-icons',
          '@fortawesome/pro-solid-svg-icons',
          '@fortawesome/pro-thin-svg-icons',
          '@fortawesome/sharp-solid-svg-icons',
        ],
      },
    ],
  },
}
