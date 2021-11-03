module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    require.resolve('../index.js'),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}
