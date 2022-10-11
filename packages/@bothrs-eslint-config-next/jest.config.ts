import type { Config } from '@jest/types';

const rootJestConfig = require('../../jest.config')

const config: Config.InitialOptions = {
  ...rootJestConfig
}

module.exports = config;
