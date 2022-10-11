import type { Linter } from 'eslint'

// ------------------------------------------------------------------------- /
module.exports = {
  env: {
    es2022: true,
  },
  extends: [
    '@bothrs/eslint-config',

    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',

    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["**/*.jsx", "**/*.tsx"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  ],
  rules: {
  },
} as Linter.BaseConfig
