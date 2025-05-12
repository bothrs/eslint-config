import type { Linter } from 'eslint'
import eslintJs from '@eslint/js'
import globals from 'globals'

import pluginImport from 'eslint-plugin-import'
import pluginNoSecrets from 'eslint-plugin-no-secrets'
import pluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginSonarjs from 'eslint-plugin-sonarjs'
import pluginUnicorn from 'eslint-plugin-unicorn'

export default [
  eslintJs.configs.recommended,
  // eslintCommentsConfigs.recommended,
  pluginSonarjs.configs.recommended,
  pluginUnicorn.configs.recommended,

  {
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        node: true,
      },
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
    },
  },

  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.es2021,
      },
    },
    plugins: {
      'no-secrets': pluginNoSecrets,
      prettier: pluginPrettier,
    },
    rules: {
      'sort-keys': 'off',
      'sort-vars': ['error'],

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
          cases: { kebabCase: true, pascalCase: true },
          ignore: [
            /\w+.(spec|test).([jt])sx?$/,
            /\w+.styled.([jt])sx?$/,
            /\w+.([jt])s$/,
            /^use([A-Z])\w+.(j|t)sx?$/,
          ],
        },
      ],

      'import/default': 'off',
      'import/no-default-export': ['warn'],
      'import/no-named-as-default-member': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
      ],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
          pathGroups: [
            { pattern: '~*', group: 'internal' },
            { pattern: '~*/**', group: 'internal' },
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

      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-nested-template-literals': 'off',

      'prettier/prettier': [
        'error',
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
        { usePrettierrc: false },
      ],

      'nonblock-statement-body-position': 'error',
    },
  },

  eslintConfigPrettier, // MUST BE LAST to turn off conflicting rules
] satisfies Linter.FlatConfig[]
