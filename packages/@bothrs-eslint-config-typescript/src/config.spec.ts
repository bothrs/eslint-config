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
      const files = path.resolve('./specs/samples/vanilla.ts')

      await eslint.lintFiles([files])

      // const results = ESLint.getErrorResults(result)

      // console.log(result[0].messages[0], results)
    }).not.toThrow()
  })

  it('Handles an error from each of the configured plugins', async () => {
    const files = path.resolve('./specs/samples/vanilla.ts')

    const result = await eslint.lintFiles([files])

    const eslintResult = result[0]
    const prettierError = eslintResult.messages.find(
      (value) => value.ruleId === 'prettier/prettier'
    )
    const typescriptError = eslintResult.messages.find(
      (value) => value.ruleId === '@typescript-eslint/no-unused-vars'
    )

    const unicornError = eslintResult.messages.find(
      (value) => value.ruleId === 'unicorn/prevent-abbreviations'
    )
    const wokeError = eslintResult.messages.find(
      (value) => value.ruleId === 'woke/profanity'
    )

    console.log(eslintResult)

    expect(eslintResult.errorCount).toBe(5)
    expect(prettierError).toBeTruthy()
    expect(unicornError).toBeTruthy()
    expect(wokeError).toBeTruthy()
    expect(typescriptError).toBeTruthy()
  })
})
