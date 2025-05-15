import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import noSecrets from 'eslint-plugin-no-secrets'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import sonarjs from 'eslint-plugin-sonarjs'
import unicorn from 'eslint-plugin-unicorn'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'

export default [
  js.configs.recommended,
  unicorn.configs.recommended,
  sonarjs.configs.recommended,
  comments.recommended,
  importPlugin.flatConfigs.recommended,

  {
    plugins: {
      'no-secrets': noSecrets,
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
      'unicorn/prefer-global-this': 'off',
      'unicorn/consistent-existence-index-check': 'off',

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
            '/\\w+.(spec|test).([jt])sx?$/',
            '/\\w+.styled.([jt])sx?$/',
            '/\\w+.([jt])s$/',
            '/^use([A-Z])\\w+.(j|t)sx?$/',
          ],
        },
      ],

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

      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/no-misleading-array-reverse': 'off',
      'sonarjs/prefer-read-only-props': 'off',
      'sonarjs/no-nested-conditional': 'off',
      'sonarjs/no-selector-parameter': 'off',

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

      'nonblock-statement-body-position': 2,
    },
  },

  prettierPluginRecommended,
]
