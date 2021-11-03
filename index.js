module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    require.resolve('./rules/prettier'),
    require.resolve('./rules/jest'),
    require.resolve('./rules/typescript'),
  ],
}
