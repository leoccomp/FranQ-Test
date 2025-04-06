import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm', // Config ESM + TypeScript
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default config;
