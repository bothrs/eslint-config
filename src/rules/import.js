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
  },
}
