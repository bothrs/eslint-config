import type { Linter } from 'eslint'

// ------------------------------------------------------------------------- /
module.exports = {
  env: {
    es2022: true,
  },
  plugins: ['import', 'no-secrets', 'prettier', 'sonarjs', 'unicorn', 'woke'],
  extends: [
    'eslint:recommended',

    'plugin:eslint-comments/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',

    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
  rules: {
    'sort-keys': 'off', // https://eslint.org/docs/rules/sort-keys
    'sort-vars': ['error'], // https://eslint.org/docs/rules/sort-vars

    // Unicorn
    // ------------------------------------------------------------------------- /
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-object-from-entries': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          Prop: true,
          prop: true,
          Props: true,
          props: true,
          Ref: true,
          ref: true,
          Src: true,
          src: true,
          Env: true,
          env: true,
        },
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
        ignore: [
          /\w+.(spec|test).([jt])sx?$/, // .spec.tsx files
          /\w+.styled.([jt])sx?$/, // .styled.tsx files
          /\w+.([jt])s$/, // regular .ts files
          /^use([A-Z])\w+.(j|t)sx?$/, // useHook.ts
        ],
      },
    ],

    // Import
    // ------------------------------------------------------------------------- /
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

    // SonarJS
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-nested-template-literals': 'off',

    // Prettier
    // ------------------------------------------------------------------------- /
    'prettier/prettier': [
      2,
      {
        arrowParens: 'always',
        endOfLine: 'lf',
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],

    // Woke
    // ------------------------------------------------------------------------- /
    'woke/profanity': ['error'],

    // prevent bracketless if statetemens to be formatted under the condition
    // ------------------------------------------------------------------------- /
    'nonblock-statement-body-position': 2,
  },
} as Linter.BaseConfig
