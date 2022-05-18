// base.js
// ---
// This is the default linter for "vanilla" typescript projects.
// ------------------------------------------------------------------------- /
module.exports = {
  env: {
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'no-secrets',
    'prettier',
    'sonarjs',
    'unicorn',
    'unused-imports',
    'woke',
  ],
  extends: [
    'eslint:recommended',

    // ESLint Comments
    'plugin:eslint-comments/recommended',

    // SonarJS plugin
    'plugin:sonarjs/recommended',

    // Typescripts plugin
    'plugin:@typescript-eslint/recommended',

    // Import plugin
    'plugin:import/recommended',
    'plugin:import/typescript',

    // Unicorn plugin
    'plugin:unicorn/recommended',

    require.resolve('./rules/import'),
    require.resolve('./rules/typescript'),
    require.resolve('./rules/prettier'),
    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
  rules: {
    'sort-keys': 'off', // https://eslint.org/docs/rules/sort-keys
    'sort-vars': ['error'], // https://eslint.org/docs/rules/sort-vars

    // Unicorn
    'unicorn/consistent-function-scoping': 'off',
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
          /^use([A-Z])\w+.(j|t)s$/, // useHook.ts
        ],
      },
    ],

    // Unused Imports
    '@typescript-eslint/no-unused-vars': 'off', // Disable in favor or unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'warn',

    // SonarJS
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-nested-template-literals': 'off',

    // Woke
    'woke/profanity': ['error'],
  },
}
