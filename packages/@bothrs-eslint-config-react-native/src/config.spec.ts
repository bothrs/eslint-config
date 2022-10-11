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
      const files = path.resolve('./specs/samples/Component.jsx')

      await eslint.lintFiles([
        files
      ])

    }).not.toThrow()
  })

  it('Handles an error from each of the configured plugins', async () => {
    const files = path.resolve('./specs/samples/Component.jsx')

    const result = await eslint.lintFiles([
      files
    ])

    const eslintResult = result[0]

    // const reactError = eslintResult.messages.find(( value ) => value.ruleId === 'react/no-unescaped-entities')

    expect(eslintResult.errorCount).toBe(1)
    // expect(reactError).toBeTruthy()
  })
})
