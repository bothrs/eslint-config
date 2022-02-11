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
    'simple-import-sort',
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
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],

    // Unused Imports
    '@typescript-eslint/no-unused-vars': 'off', // Disable in favor or unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'warn',

    // Import order
    'import/order': 'off',
    'simple-import-sort': 'warn',

    // Woke
    'woke/profanity': ['error'],
  },
}
