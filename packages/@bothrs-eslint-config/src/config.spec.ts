import { ESLint } from 'eslint'
import path from 'node:path'


describe('config', () => {
  let eslint: ESLint

  beforeEach(() => {
    eslint = new ESLint({
        useEslintrc: true,
      })
  })

  it('Initializes without errors', () => {

    expect(async () => {
      const files = path.resolve('./specs/samples/vanilla.js')

      await eslint.lintFiles([
        files
      ])

    }).not.toThrow()
  })

  it('Handles an error from each of the configured plugins', async () => {

    const files = path.resolve('./specs/samples/vanilla.js')

    const result = await eslint.lintFiles([
      files
    ])

    const eslintResult = result[0]
    const prettierError = eslintResult.messages.find(( value ) => value.ruleId === 'prettier/prettier')
    const unicornError = eslintResult.messages.find(( value ) => value.ruleId === 'unicorn/prevent-abbreviations')

    expect(eslintResult.errorCount).toBe(5)
    expect(prettierError).toBeTruthy()
    expect(unicornError).toBeTruthy()
  })
})
