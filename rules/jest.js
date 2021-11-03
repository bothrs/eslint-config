module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest', 'jest-formatting'],
  extends: ['plugin:jest/recommended', 'plugin:jest-formatting/recommended'],
}
