module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // Assume React 17
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}
