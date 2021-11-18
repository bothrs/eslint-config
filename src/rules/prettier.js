module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      2,
      {
        arrowParens: 'always',
        endOfLine: 'lf',
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],
  },
}
