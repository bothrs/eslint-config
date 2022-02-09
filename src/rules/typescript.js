module.exports = {
  rules: {
    // Rules that conflict with prettier
    // --------------------------------------------------------------------
    'dot-notation': 'off', // https://eslint.org/docs/rules/dot-notation
    '@typescript-eslint/dot-notation': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md

    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'enum', format: ['PascalCase', 'UPPER_CASE'] },
    ],
  },
}
