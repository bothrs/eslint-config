import type { Linter } from 'eslint'

// ------------------------------------------------------------------------- /
module.exports = {
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@bothrs/eslint-config',
    '@bothrs/eslint-config-react',

    'plugin:react-native-a11y/all',

    'prettier', // Make sure to put it last, so it gets the chance to override other configs.
  ],
  plugins: ['react-native', '@react-native-community'],
  rules: {
  },
} as Linter.BaseConfig
