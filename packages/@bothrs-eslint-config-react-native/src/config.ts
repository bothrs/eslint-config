import type { Linter } from 'eslint'

module.exports = {
  extends: [
    '@bothrs/eslint-config',
    '@bothrs/eslint-config-react',
    'plugin:react-native-a11y/all',
    'prettier',
  ],

  env: {
    es2022: true,
  },

  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react-native', '@react-native-community'],
      env: {
        'react-native/react-native': true,
      },
      rules: {},
    },
  ],
} as Linter.BaseConfig
