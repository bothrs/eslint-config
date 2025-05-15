import baseConfig from '../../@bothrs-eslint-config/src/config'
import reactBaseConfig from '../../@bothrs-eslint-config-react/src/config'
import eslintConfigPrettier from 'eslint-config-prettier'

import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import path from 'path'

import globals from 'globals'

import reactNativePlugin from 'eslint-plugin-react-native'
import reactNativeCommunityPlugin from '@react-native-community/eslint-config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...baseConfig,
  ...reactBaseConfig,

  ...compat.extends('plugin:react-native-a11y/all'),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-native': reactNativePlugin,
      '@react-native-community': reactNativeCommunityPlugin,
    },
    languageOptions: {
      globals: {
        'react-native/react-native': true,
      },
    },
    rules: {},
  },

  eslintConfigPrettier,
]
