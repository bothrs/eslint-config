declare module 'eslint-plugin-import' {
  import type { Linter } from 'eslint'

  const importPlugin: {
    flatConfigs: {
      recommended: Linter.Config
      typescript: Linter.Config
    }
  }

  export default importPlugin
}
