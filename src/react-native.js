module.exports = {
  plugins: ['react-native', '@react-native-community'],
  extends: ['plugin:react-native-a11y/all'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          '@fortawesome/free-solid-svg-icons',
          '@fortawesome/free-brands-svg-icons',
          '@fortawesome/free-regular-svg-icons',
          '@fortawesome/pro-solid-svg-icons',
          '@fortawesome/pro-regular-svg-icons',
          '@fortawesome/pro-light-svg-icons',
          '@fortawesome/pro-duotone-svg-icons',
          '@fortawesome/sharp-solid-svg-icons',
        ],
      },
    ],
  },
}
